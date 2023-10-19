export const getAllusers = () => {
    return fetch('/api/', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
  };
  

  