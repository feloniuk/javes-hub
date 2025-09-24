'use server';

async function addExistingContactToList(email) {
  const response = await fetch('https://api.brevo.com/v3/contacts/lists/16/contacts/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'api-key': process.env.BREVO_API_KEY
    },
    body: JSON.stringify({ 
      emails: [email]
    })
  });

  if (!response.ok) {
    const errorData = await response.json();
    if (errorData.message.includes("Contact already in list")) {
      throw new Error('Contact already exist');
    }
    throw new Error(errorData.message || 'Failed to subscribe');
  }

  return { success: true, message: 'Thank you for subscribing!' };
}



export async function subscribe(data) {
  try {
    if (!data.email || !/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/.test(data.email)) {
      return { success: false, message: 'Invalid email address.' };
    }

    const response = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
        'api-key': process.env.BREVO_API_KEY
      },
      body: JSON.stringify({
        email: data.email,
        listIds: [16]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      if (errorData.message === "Contact already exist") {
        return await addExistingContactToList(data.email);
      }
      throw new Error(errorData.message || 'Failed to subscribe');
    }

    return { success: true, message: 'Thank you for subscribing!' };
  } catch (error) {
    return { 
      success: false, 
      message: error.message || 'Failed to subscribe, please try again later.' 
    };
  }
}