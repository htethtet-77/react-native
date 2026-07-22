# PostHog post-wizard report

The wizard completed the Expo integration by installing the PostHog React Native SDK and its survey peer dependency, configuring build-time Expo environment variables, initializing PostHog at the app entry point, preserving touch autocapture and manual Expo Router screen tracking, identifying authenticated users with stable Clerk user IDs, removing PII from event properties, adding exception capture around authentication failures, and instrumenting the subscription lifecycle. A live dashboard and five saved insights were also created.

| Event | Description | File |
|---|---|---|
| `user_signed_in` | User successfully signs in through Clerk. | `app/(auth)/sign-in.tsx` |
| `user_sign_in_failed` | A user sign-in attempt fails. | `app/(auth)/sign-in.tsx` |
| `user_signed_up` | User completes account creation and email verification through Clerk. | `app/(auth)/sign-up.tsx` |
| `user_sign_up_failed` | A user sign-up attempt fails. | `app/(auth)/sign-up.tsx` |
| `user_signed_out` | User signs out from settings. | `app/(tabs)/setting.tsx` |
| `subscription_expanded` | User expands a subscription card to view details. | `app/(tabs)/index.tsx` |
| `subscription_collapsed` | User collapses an expanded subscription card. | `app/(tabs)/index.tsx` |
| `subscription_details_viewed` | User opens a subscription detail screen. | `app/subscriptions/[id].tsx` |
| `subscription_created` | User creates a subscription with billing details. | `app/(tabs)/index.tsx` |

## Next steps

We've built insights and a dashboard to monitor user behavior based on the instrumented events:

- [Analytics basics dashboard](https://us.posthog.com/project/523222/dashboard/1887465)
- [Signup to subscription funnel](https://us.posthog.com/project/523222/insights/ZZsju9w5)
- [Subscriptions created over time](https://us.posthog.com/project/523222/insights/V6BfJOmO)
- [Subscriptions by category](https://us.posthog.com/project/523222/insights/adaLNrSu)
- [Authentication outcomes](https://us.posthog.com/project/523222/insights/2DKoEEjx)
- [Sign-outs over time](https://us.posthog.com/project/523222/insights/CIqvNvG6)

## Verify before merging

- [ ] Run a full production build (the wizard only verified the files it touched) and fix any lint or type errors introduced by the generated code.
- [ ] Run the test suite — call sites that were rewritten or instrumented may need updated mocks or fixtures.
- [ ] Add `EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN` and `EXPO_PUBLIC_POSTHOG_HOST` to `.env.example` and any bootstrap scripts so collaborators know what to set.
- [ ] Confirm the returning-visitor path also calls `identify` — fresh login and signup are covered, but restored Clerk sessions should be explicitly identified.

### Agent skill

We've left an agent skill folder in your project. You can use this context for further agent development when using Claude Code. This will help ensure the model provides the most up-to-date approaches for integrating PostHog.
