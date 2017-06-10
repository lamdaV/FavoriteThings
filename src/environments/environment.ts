// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: 'AIzaSyAFT_ej1SrLkxTooIKpqQxxy4xP9JnbT9M',
    authDomain: 'lamd-default.firebaseapp.com',
    databaseURL: 'https://lamd-default.firebaseio.com',
    projectId: 'lamd-default',
    storageBucket: 'lamd-default.appspot.com',
    messagingSenderId: '870277540194'
  }
};
