import { useState } from 'react';
import { KeyRound, Shield, AlertCircle, Fingerprint, X } from 'lucide-react';

// Helper function to convert string to ArrayBuffer
function bufferEncode(value: string) {
  return Uint8Array.from(value, c => c.charCodeAt(0));
}

// Helper function to convert ArrayBuffer to base64
function bufferDecode(value: ArrayBuffer) {
  return btoa(String.fromCharCode(...new Uint8Array(value)));
}

export function Setup() {
  const [isSet, setIsSet] = useState(false);
  const [showPasskeyDialog, setShowPasskeyDialog] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [isCreating, setIsCreating] = useState(false);

  const handleSetPasskey = () => {
    setShowPasskeyDialog(true);
    setError(null);
  };

  const handleConfirmPasskey = async () => {
    setIsCreating(true);
    setError(null);
    
    try {
      // Check if WebAuthn is supported
      if (!window.PublicKeyCredential) {
        throw new Error('WebAuthn is not supported in this browser');
      }

      // Generate a random challenge
      const challenge = crypto.getRandomValues(new Uint8Array(32));
      
      // Create the passkey - allows both platform (Windows Hello) and cross-platform (YubiKey) authenticators
      const credential = await navigator.credentials.create({
        publicKey: {
          challenge: challenge,
          rp: {
            name: 'Alexandru Buza Admin',
            id: window.location.hostname,
          },
          user: {
            id: bufferEncode('admin-user-id'),
            name: 'admin@localhost',
            displayName: 'Administrator',
          },
          pubKeyCredParams: [
            { alg: -7, type: 'public-key' },  // ES256
            { alg: -257, type: 'public-key' }, // RS256
          ],
          authenticatorSelection: {
            // Remove authenticatorAttachment to allow both platform and cross-platform authenticators
            requireResidentKey: true,
            residentKey: 'required',
            userVerification: 'preferred', // Changed to 'preferred' for better hardware key compatibility
          },
          timeout: 60000,
          attestation: 'none',
        },
      }) as PublicKeyCredential;

      if (credential) {
        // Store the credential ID for future authentication
        const credentialId = bufferDecode(credential.rawId);
        localStorage.setItem('adminPasskeyId', credentialId);
        localStorage.setItem('adminPasskeyCreated', new Date().toISOString());
        
        setShowPasskeyDialog(false);
        setIsSet(true);
      }
    } catch (err) {
      console.error('Error creating passkey:', err);
      if (err instanceof Error) {
        if (err.name === 'NotAllowedError') {
          setError('Passkey creation was cancelled or timed out');
        } else if (err.name === 'InvalidStateError') {
          setError('A passkey already exists for this device');
        } else {
          setError(err.message);
        }
      } else {
        setError('Failed to create passkey. Please try again.');
      }
    } finally {
      setIsCreating(false);
    }
  };

  const handleCancelPasskey = () => {
    setShowPasskeyDialog(false);
    setError(null);
  };

  if (isSet) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center p-4">
        <div className="bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full text-center border border-gray-700">
          <div className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <Shield className="w-8 h-8 text-green-400" />
          </div>
          <h1 className="text-green-400 mb-2">Passkey Set Successfully!</h1>
          <p className="text-gray-300 mb-6">
            Your admin dashboard is now secured with a passkey. You can use your biometric authentication or security key to sign in.
          </p>
          <button
            onClick={() => window.location.reload()}
            className="bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-500 transition-colors"
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-gray-950 flex items-center justify-center p-4">
      <div className="bg-gray-800 rounded-2xl shadow-xl p-8 max-w-md w-full border border-gray-700">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="w-16 h-16 bg-amber-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <KeyRound className="w-8 h-8 text-amber-400" />
          </div>
          <h1 className="text-white mb-2">Admin Dashboard Setup</h1>
          <p className="text-gray-400">Secure your dashboard with a passkey</p>
        </div>

        {/* Warning Message */}
        <div className="bg-amber-500/10 border border-amber-500/30 rounded-lg p-4 mb-6 flex gap-3">
          <AlertCircle className="w-5 h-5 text-amber-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-amber-200">
              No passkey is currently set for the admin dashboard.
            </p>
            <p className="text-amber-300/80 text-sm mt-1">
              Please create a passkey to secure access.
            </p>
          </div>
        </div>

        {/* Info about passkeys */}
        <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4 mb-6">
          <p className="text-blue-200 text-sm">
            Passkeys use your device's biometric authentication (Face ID, fingerprint, Windows Hello) or a physical security key (YubiKey, etc.) for secure sign-in.
          </p>
        </div>

        {/* Error message */}
        {error && (
          <div className="bg-red-500/10 border border-red-500/30 rounded-lg p-4 mb-6 flex gap-3">
            <AlertCircle className="w-5 h-5 text-red-400 flex-shrink-0 mt-0.5" />
            <p className="text-red-200 text-sm">{error}</p>
          </div>
        )}

        <button
          onClick={handleSetPasskey}
          className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-500 transition-colors flex items-center justify-center gap-2"
        >
          <Shield className="w-5 h-5" />
          Set Passkey
        </button>

        {/* Info */}
        <div className="mt-6 pt-6 border-t border-gray-700">
          <p className="text-gray-400 text-sm text-center">
            Your passkey will be stored securely on this device and synced via your account (iCloud Keychain, Google Password Manager, etc.).
          </p>
        </div>
      </div>

      {/* Passkey Dialog Modal */}
      {showPasskeyDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center p-4 z-50">
          <div className="bg-gray-800 rounded-2xl shadow-2xl p-6 max-w-sm w-full relative animate-scale-in border border-gray-700">
            <button
              onClick={handleCancelPasskey}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-200"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Fingerprint className="w-8 h-8 text-blue-400" />
              </div>
              
              <h2 className="text-white mb-2">Create a passkey</h2>
              <p className="text-gray-400 text-sm mb-6">
                for Admin Dashboard
              </p>

              <div className="mb-6 p-4 bg-gray-900/50 rounded-lg border border-gray-700">
                <p className="text-gray-300 text-sm">
                  Choose Windows Hello, insert your security key (YubiKey, etc.), or use another device to create a passkey.
                </p>
              </div>

              <div className="flex gap-3">
                <button
                  onClick={handleCancelPasskey}
                  disabled={isCreating}
                  className="flex-1 px-4 py-2 border border-gray-600 text-gray-300 rounded-lg hover:bg-gray-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirmPasskey}
                  disabled={isCreating}
                  className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isCreating ? 'Creating...' : 'Continue'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes scale-in {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-scale-in {
          animation: scale-in 0.2s ease-out;
        }
      `}</style>
    </div>
  );
}
