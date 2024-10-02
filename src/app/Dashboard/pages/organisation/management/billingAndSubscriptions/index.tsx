import Subscription from "src/app/Dashboard/pages/accountSettings/components/Subscription";
import React from "react";

const OrganisationManagementBillingAndSubscription = () => {
  const SubscriptionBenefit1: string[] = [
    "Access to all basic features",
    "Basic reporting and analytics",
    "Up to 10 individual users",
    "20GB individual data each user",
    "Basic chat and email support",
  ];

  const SubscriptionBenefit2: string[] = [
    "200+ integrations",
    "Advanced reporting and analytics",
    "Up to 20 individual users",
    "40GB individual data each user",
    "Priority chat and email support",
  ];

  const SubscriptionBenefit3: string[] = [
    "Advanced custom fields",
    "Audit log and data history",
    "Unlimited individual users",
    "Unlimited individual data",
    "Personalised+priotity service",
  ];

  return (
    <section className="bg-muftar-gray-50 px-4 md:px-16">
      <div className="rounded-xl py-6">
        <p className="mb-6 text-2xl font-semibold text-muftar-gray-800">
          Billing & Subscriptions
        </p>
        <div>
          <div className="mb-6 flex items-center justify-center">
            <div className="flex items-center gap-2 rounded-lg border border-muftar-border p-1.5">
              <button className="cursor-pointer rounded-md px-3.5 py-2.5 text-base font-semibold text-app-blue-100 shadow-custom-shadow-sm">
                Monthly billing
              </button>
              <button className="cursor-pointer rounded-md px-3.5 py-2.5 text-base font-semibold text-muftar-gray-700">
                Annual billing
              </button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            <Subscription
              SubscriptionBenefit={SubscriptionBenefit1}
              title="$0/mth"
              plan="Free plan"
              billing="Billed annually."
              currentPlan={true}
            />
            <Subscription
              SubscriptionBenefit={SubscriptionBenefit2}
              title="$20/mth"
              plan="Business plan"
              billing="Billed annually."
              currentPlan={false}
            />
            <Subscription
              SubscriptionBenefit={SubscriptionBenefit3}
              title="$40/mth"
              plan="Enterprise plan"
              billing="Billed annually."
              currentPlan={false}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OrganisationManagementBillingAndSubscription;
