// Welcome email API endpoint
// This would typically be a server-side function, but for now we'll create a client-side version

export async function sendWelcomeEmail(userData: {
  email: string;
  name: string;
  provider: string;
}) {
  try {
    // For now, we'll just log the welcome email data
    // In a real app, you'd send this to your email service (SendGrid, Resend, etc.)
    console.log('🎉 Welcome Email Data:', {
      to: userData.email,
      subject: 'Welcome to SquareOne Journey!',
      name: userData.name,
      provider: userData.provider,
      message: `Hi ${userData.name}! Welcome to SquareOne Journey. We're excited to help you explore AI and grow your business.`
    });

    // You could also show a toast notification
    // toast.success(`Welcome ${userData.name}! Check your email for more details.`);
    
    return { success: true };
  } catch (error) {
    console.error('Welcome email error:', error);
    return { success: false, error };
  }
}

// Alternative: Simple client-side welcome message
export function showWelcomeMessage(userData: {
  email: string;
  name: string;
  provider: string;
}) {
  const welcomeMessage = `🎉 Welcome to SquareOne Journey, ${userData.name}! 
  
We're excited to help you explore AI and grow your business. 

Your account has been created successfully using ${userData.provider === 'google' ? 'Google' : 'email'} authentication.

Ready to start your journey?`;

  // Show in browser console for now
  console.log(welcomeMessage);
  
  // You could also show a modal or toast notification here
  alert(welcomeMessage);
  
  return welcomeMessage;
}
