import * as Sentry from "@sentry/nextjs";

Sentry.init({
  dsn: "https://14e657e32738db2a48bc50e0ccc1fcee@o4508172452102144.ingest.us.sentry.io/4508172457148416",

  tracesSampleRate: 1,

  debug: false,

  replaysOnErrorSampleRate: 1.0,

  replaysSessionSampleRate: 0.1,

  integrations: [
    Sentry.replayIntegration({
      maskAllText: true,
      blockAllMedia: true,
    }),
    Sentry.feedbackIntegration({
      // Additional SDK configuration goes in here, for example:
      colorScheme: "system",
    }),
  ],
});
