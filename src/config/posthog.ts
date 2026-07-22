import PostHog from 'posthog-react-native'
import Constants from 'expo-constants'

const apiKey = (Constants.expoConfig?.extra?.posthogProjectToken as string | undefined)?.trim()
const host = (Constants.expoConfig?.extra?.posthogHost as string | undefined)?.trim()

if (!apiKey || !host) {
  throw new Error(
    'PostHog configuration is missing. Set EXPO_PUBLIC_POSTHOG_PROJECT_TOKEN and EXPO_PUBLIC_POSTHOG_HOST in .env.'
  )
}

export const posthog = new PostHog(apiKey, {
  host,
  captureAppLifecycleEvents: true,
  debug: __DEV__,
  flushAt: 20,
  flushInterval: 10000,
  maxBatchSize: 100,
  maxQueueSize: 1000,
  preloadFeatureFlags: true,
  sendFeatureFlagEvent: true,
  featureFlagsRequestTimeoutMs: 10000,
  requestTimeout: 10000,
  fetchRetryCount: 3,
  fetchRetryDelay: 3000,
})