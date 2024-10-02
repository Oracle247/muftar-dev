export const RtkTypeTags = ["Post", "Profile", "Credit", "Organization"];

export const baseUrl = process.env.REACT_APP_API_URL;

export const API_ROUTE = {
  LOGIN: "auth/login",
  RESET_PASSWORD: "auth/reset_password",
  RESET_PASSWORD_EMAIL: "auth/reset_password_email",
  DASHBOARD: "/users/userDashboards/",
  SIGN_UP: "auth/register",
  RESEND_OTP: "auth/resend-otp",
  GOOGLE_SIGNUP: "auth/login/google",
  ID_VERIFICATION: "auth/id_verification",
  ID_CONFIRMATION: "user/check_id_submission",
  ON_BOARDING: "",
  ALL_JOBS: "jobs/fetch_all",
};

export const APP_ROUTE = {
  MAIN_DASHBOARD: "overview",
  MESSAGES: "messages",
  COMMUNITY: "community",
  FEED: "community/feed",
  EVENTS: "community/events",
  POLLS: "community/polls-surveys",
  JOB_BOARD: "job-board",
  MUFTAR_CREDIT: "muftar-credit",
  ACHIEVEMENTS: "muftar-credit/achievements",
  REFERRAL_SYSTEM: "muftar-credit/referral-system",
  ACCOUNT_SETTINGS: "account-settings",
  ORGANISATION_DASHBOARD: "/organisation",
  ORGANISATION_MANAGEMENT: "/organisation/management",
  ORGANISATION_MANAGEMENT_DETAILS:
    "/organisation/management/organisation-details",
  ORGANISATION_MANAGEMENT_BILLING_AND_SUBSCRIPTIONS:
    "/organisation/management/billing-and-subscriptions",
  ORGANISATION_MANAGEMENT_USER_CONTROLS:
    "/organisation/management/user-controls",
  ORGANISATION_HUMAN_RESOURCES: "/organisation/human-resources",
  ORGANISATION_OPERATIONS: "/organisation/operations",
  // ORGANISATION_OPERATIONS: "/organisation/operations/broker",

  ORGANISATION_OPERATIONS_SHIPMENT_TRACKING:
    "/organisation/operations/shipper-receiver/shipment-tracking",
  ORGANISATION_OPERATIONS_SHIPMENT_HISTORY:
    "/organisation/operations/shipper-receiver/shipment-history",
  ORGANISATION_OPERATIONS_ORDER_SPECIFIC_NOTIFICATIONS:
    "/organisation/operations/shipper-receiver/order-specific-notifications",
  ORGANISATION_OPERATIONS_ORDER_SPECIFIC_DOCUMENTS:
    "/organisation/operations/shipper-receiver/order-specific-documents",

  ORGANISATION_OPERATIONS_LOAD_MATCHING_BROKER:
    "/organisation/operations/broker/load-matching",
  ORGANISATION_OPERATIONS_SHIPMENT_TRACKING_BROKER:
    "/organisation/operations/broker/shipment-tracking",
  ORGANISATION_OPERATIONS_SHIPMENT_HISTORY_BROKER:
    "/organisation/operations/broker/shipment-history",
  ORGANISATION_OPERATIONS_ORDER_SPECIFIC_NOTIFICATIONS_BROKER:
    "/organisation/operations/broker/order-specific-notifications",
  ORGANISATION_OPERATIONS_ORDER_SPECIFIC_DOCUMENTS_BROKER:
    "/organisation/operations/broker/order-specific-documents",

  ORGANISATION_OPERATIONS_LOAD_BOARD_CARRIER:
    "/organisation/operations/carrier/load-board",
  ORGANISATION_OPERATIONS_LOAD_MANAGEMENT_CARRIER:
    "/organisation/operations/carrier/load-management",
  ORGANISATION_OPERATIONS_SHIPMENT_TRACKING_CARRIER:
    "/organisation/operations/carrier/shipment-tracking",
  ORGANISATION_OPERATIONS_SHIPMENT_HISTORY_CARRIER:
    "/organisation/operations/carrier/shipment-history",
  ORGANISATION_OPERATIONS_ORDER_SPECIFIC_NOTIFICATIONS_CARRIER:
    "/organisation/operations/carrier/order-specific-notifications",
  ORGANISATION_OPERATIONS_ORDER_SPECIFIC_DOCUMENTS_CARRIER:
    "/organisation/operations/carrier/order-specific-documents",
  ORGANISATION_OPERATIONS_DRIVER_BOARD_CARRIER:
    "/organisation/operations/carrier/driver-board",
};
