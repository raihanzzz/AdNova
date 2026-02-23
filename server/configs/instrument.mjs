import * as Sentry from "@sentry/node"

Sentry.init({
  dsn: "https://73134f83a81e1bc054004321fe286bbe@o4510912960069632.ingest.de.sentry.io/4510912966623312",
  // Setting this option to true will send default PII data to Sentry.
  // For example, automatic IP address collection on events
  sendDefaultPii: true,
});