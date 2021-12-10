const baseURL = `${process.env.NEXT_PUBLIC_API_URL}/api`;

export const enableAll = true;

export const rests = {
  health: {
    // Path Example:
    // '/api/health'
    // 'https://api.domain.com/api/health'
    path: `${baseURL}/health`,
    // status: 403, // set response status code and response error information, default is 200
    // delay: 1000, // delay api response
    data: {
      health: true,
    },
    errors: {
      403: {
        code: 'ERROR-403',
        message: 'No access granted.',
      },
      500: {
        code: 'ERROR-500',
        message: 'Service not available right now.',
      },
    },
  },
  auth: {
    method: 'post',
    path: `${baseURL}/auth`,
    delay: 1000,
    data: {
      token: 'JWT_TOKEN',
      expires_at: 9999999999,
    },
  },
  userMe: {
    path: `${baseURL}/users/me`,
    data: {
      account: 'genexu@email.com',
      username: 'Gene Xu',
    },
  },
  communities: {
    path: `${baseURL}/communities`,
    delay: 1000,
    data: [
      {
        key: 'programing',
        name: 'Programing',
      },
      {
        key: 'memes',
        name: 'Memes',
      },
      {
        key: 'data-structure',
        name: 'Data Structure',
      },
    ],
    errors: {
      500: {
        code: 'ERROR-500',
        message: 'Service not available right now.',
      },
    },
  },
};
