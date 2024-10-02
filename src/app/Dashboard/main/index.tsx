import { Suspense } from "react";
import { APP_ROUTE } from "../../../helpers/constant";
import { Route, Routes } from "react-router-dom";
import Overview from "../pages/Overview";
import Community from "../pages/community";
import Feed from "../pages/community/feed";
import Events from "../pages/community/events";
import PollsSurvey from "../pages/community/polls&surveys";
import Loader from "../../../components/Loader";
import Messages from "../pages/Messages";
import JobBoard from "../pages/jobBoard";
import MufterCredit from "../pages/muftarCredit";
import Achievements from "../pages/muftarCredit/achievements";
import ReferralSystem from "../pages/muftarCredit/referral";
import AccountSettings from "../pages/accountSettings";
import OrganisationDashboard from "../pages/organisation";
import OrganisationManagement from "../pages/organisation/management";
import OrganisationManagementDetails from "../pages/organisation/management/organisationDetails";
import OrganisationManagementBillingAndSubscription from "../pages/organisation/management/billingAndSubscriptions";
import OrganisationManagementUserControls from "../pages/organisation/management/userControls";
import HumanResources from "../pages/organisation/humanResources";
import OrganisationOperationsShipmentTracking from "../pages/organisation/operations/shipperReceiver/shipmentTracking";
import OrganisationOperations from "../pages/organisation/operations";
import OrganisationOperationsShipmentHistory from "../pages/organisation/operations/shipperReceiver/shipmentHistory";
import OrganisationOperationsOrderSpecificDocuments from "../pages/organisation/operations/shipperReceiver/orderSpecificDocuments";
import OrganisationOperationsOrderSpecificNotifications from "../pages/organisation/operations/shipperReceiver/orderSpecificNotifications";
import OrganisationOperationsBrokerLoadMatching from "../pages/organisation/operations/broker/loadMatching";
import OrganisationOperationsBrokerShipmentTracking from "../pages/organisation/operations/broker/shipmentTracking";
import OrganisationOperationsBrokerShipmentHistory from "../pages/organisation/operations/broker/shipmentHistory";
import OrganisationOperationsBrokerOrderSpecificNotifications from "../pages/organisation/operations/broker/orderSpecificNotifications";
import OrganisationOperationsBrokerOrderSpecificDocuments from "../pages/organisation/operations/broker/orderSpecificDocuments";
import OrganisationOperationsCarrierLoadBoard from "../pages/organisation/operations/carrier/loadBoard";
import OrganisationOperationsCarrierLoadManagement from "../pages/organisation/operations/carrier/loadManagement";
import OrganisationOperationsCarrierShipmentTracking from "../pages/organisation/operations/carrier/shipmentTracking";
import OrganisationOperationsCarrierShipmentHistory from "../pages/organisation/operations/carrier/shipmentHistory";
import OrganisationOperationsCarrierOrderSpecificNotifications from "../pages/organisation/operations/carrier/orderSpecificNotification";
import OrganisationOperationsCarrierOrderSpecificDocuments from "../pages/organisation/operations/carrier/orderSpecificDocuments/index";
import OrganisationOperationsCarrierDriverBoard from "../pages/organisation/operations/carrier/driverBoard";

const Dashboard = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route index element={<Overview />} />
          <Route path={APP_ROUTE?.MESSAGES} element={<Messages />} />
          <Route path={APP_ROUTE?.COMMUNITY} element={<Community />} />
          <Route path={APP_ROUTE?.FEED} element={<Feed />} />
          <Route path={APP_ROUTE?.EVENTS} element={<Events />} />
          <Route path={APP_ROUTE?.POLLS} element={<PollsSurvey />} />
          <Route path={APP_ROUTE?.JOB_BOARD} element={<JobBoard />} />
          <Route path={APP_ROUTE?.MUFTAR_CREDIT} element={<MufterCredit />} />
          <Route path={APP_ROUTE?.ACHIEVEMENTS} element={<Achievements />} />
          <Route
            path={APP_ROUTE?.REFERRAL_SYSTEM}
            element={<ReferralSystem />}
          />
          <Route
            path={APP_ROUTE?.ACCOUNT_SETTINGS}
            element={<AccountSettings />}
          />
          <Route
            path={APP_ROUTE?.ORGANISATION_DASHBOARD}
            element={<OrganisationDashboard />}
          />
          <Route
            path={APP_ROUTE?.ORGANISATION_MANAGEMENT}
            element={<OrganisationManagement />}
          >
            <Route
              path={APP_ROUTE?.ORGANISATION_MANAGEMENT_DETAILS}
              element={<OrganisationManagementDetails />}
            />
            <Route
              path={
                APP_ROUTE?.ORGANISATION_MANAGEMENT_BILLING_AND_SUBSCRIPTIONS
              }
              element={<OrganisationManagementBillingAndSubscription />}
            />
            <Route
              path={APP_ROUTE?.ORGANISATION_MANAGEMENT_USER_CONTROLS}
              element={<OrganisationManagementUserControls />}
            />
          </Route>
          <Route
            path={APP_ROUTE?.ORGANISATION_HUMAN_RESOURCES}
            element={<HumanResources />}
          />

          <Route
            path={APP_ROUTE?.ORGANISATION_OPERATIONS}
            element={<OrganisationOperations />}
          >
            <Route
              path={APP_ROUTE?.ORGANISATION_OPERATIONS_SHIPMENT_TRACKING}
              element={<OrganisationOperationsShipmentTracking />}
            />
            <Route
              path={APP_ROUTE?.ORGANISATION_OPERATIONS_SHIPMENT_HISTORY}
              element={<OrganisationOperationsShipmentHistory />}
            />
            <Route
              path={
                APP_ROUTE?.ORGANISATION_OPERATIONS_ORDER_SPECIFIC_NOTIFICATIONS
              }
              element={<OrganisationOperationsOrderSpecificNotifications />}
            />
            <Route
              path={APP_ROUTE?.ORGANISATION_OPERATIONS_ORDER_SPECIFIC_DOCUMENTS}
              element={<OrganisationOperationsOrderSpecificDocuments />}
            />
            <Route
              path={APP_ROUTE?.ORGANISATION_OPERATIONS_LOAD_MATCHING_BROKER}
              element={<OrganisationOperationsBrokerLoadMatching />}
            />
            <Route
              path={APP_ROUTE?.ORGANISATION_OPERATIONS_SHIPMENT_TRACKING_BROKER}
              element={<OrganisationOperationsBrokerShipmentTracking />}
            />
            <Route
              path={APP_ROUTE?.ORGANISATION_OPERATIONS_SHIPMENT_HISTORY_BROKER}
              element={<OrganisationOperationsBrokerShipmentHistory />}
            />
            <Route
              path={
                APP_ROUTE?.ORGANISATION_OPERATIONS_ORDER_SPECIFIC_NOTIFICATIONS_BROKER
              }
              element={
                <OrganisationOperationsBrokerOrderSpecificNotifications />
              }
            />
            <Route
              path={
                APP_ROUTE?.ORGANISATION_OPERATIONS_ORDER_SPECIFIC_DOCUMENTS_BROKER
              }
              element={<OrganisationOperationsBrokerOrderSpecificDocuments />}
            />
            <Route
              path={APP_ROUTE?.ORGANISATION_OPERATIONS_LOAD_BOARD_CARRIER}
              element={<OrganisationOperationsCarrierLoadBoard />}
            />
            <Route
              path={APP_ROUTE?.ORGANISATION_OPERATIONS_LOAD_MANAGEMENT_CARRIER}
              element={<OrganisationOperationsCarrierLoadManagement />}
            />
            <Route
              path={
                APP_ROUTE?.ORGANISATION_OPERATIONS_SHIPMENT_TRACKING_CARRIER
              }
              element={<OrganisationOperationsCarrierShipmentTracking />}
            />
            <Route
              path={APP_ROUTE?.ORGANISATION_OPERATIONS_SHIPMENT_HISTORY_CARRIER}
              element={<OrganisationOperationsCarrierShipmentHistory />}
            />
            <Route
              path={
                APP_ROUTE?.ORGANISATION_OPERATIONS_ORDER_SPECIFIC_NOTIFICATIONS_CARRIER
              }
              element={
                <OrganisationOperationsCarrierOrderSpecificNotifications />
              }
            />
            <Route
              path={
                APP_ROUTE?.ORGANISATION_OPERATIONS_ORDER_SPECIFIC_DOCUMENTS_CARRIER
              }
              element={<OrganisationOperationsCarrierOrderSpecificDocuments />}
            />
            <Route
              path={APP_ROUTE?.ORGANISATION_OPERATIONS_DRIVER_BOARD_CARRIER}
              element={<OrganisationOperationsCarrierDriverBoard />}
            />
          </Route>
        </Routes>
      </Suspense>
    </>
  );
};

export default Dashboard;
