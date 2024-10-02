import { CustomRadioButton, FormInput } from "../../../../../components/Input";
import ImageComp from "../../../../../components/Image";
import NavBar from "../../../../../components/navigation/NavBar";
import CreditCard from "../components/CreditCard";
import Months from "../components/Months";
import { CustomButton } from "../../../../../components/ActionBtn";

import { CopyToClipboard } from "react-copy-to-clipboard";
import { useState } from "react";
import CardCover from "../components/CardCover";
import Table from "../../../../../components/table/Table";
import { useGetWalletBalanceQuery } from "src/api/creditSlice";
import useAuth from "src/hooks/useAuth";
import { Skeleton } from "@mui/material";

const ReferralSystem = () => {
  const { user } = useAuth();
  const { data: walletData, isLoading: walletIsLoading } =
    useGetWalletBalanceQuery(user?.id);
  const [textToCopy, setTextToCopy] = useState<string>(
    "https://wwww,muftar.comlearn-ux-design",
  );
  const [isCopied, setIsCopied] = useState<boolean>(false);

  const handleCopy = () => {
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 2000); // Reset after 2 seconds
  };

  const headers = [
    { name: "Name", id: "name" },
    { name: "Email address", id: "email" },
    { name: "Enrolment Date", id: "enrolment" },
    { name: "Status", id: "status" },
  ];
  const body = [
    {
      name: "Joseph Mehmed",
      email: "olivia@untitledui.com",
      enrolment: "12/06/2024",
      status: "active",
    },
    {
      name: "Phoenix Crane",
      email: "phoenix@untitledui.com",
      enrolment: "12/06/2024",
      status: "pending",
    },
    {
      name: "Olivia Green",
      email: "olivia@untitledui.com",
      enrolment: "12/06/2024",
      status: "active",
    },
    {
      name: "Sophia Blue",
      email: "phoenix@untitledui.com",
      enrolment: "12/06/2024",
      status: "pending",
    },
    {
      name: "Aiden Smith",
      email: "olivia@untitledui.com",
      enrolment: "12/06/2024",
      status: "active",
    },
  ];

  return (
    <NavBar>
      <section className="w-full bg-muftar-gray-100">
        <section className="h-full px-4 py-10 md:px-16">
          {walletIsLoading ? (
            <div className="mb-10 flex w-full items-center gap-6 overflow-x-scroll no-scrollbar md:justify-start">
              <Skeleton variant="rounded" width={421} height={114} />
              <Skeleton variant="rounded" width={421} height={114} />
              <Skeleton variant="rounded" width={421} height={114} />
            </div>
          ) : (
            <div className="mb-10 flex w-full items-center gap-6 overflow-x-scroll no-scrollbar md:justify-start">
              <CreditCard
                percentage="10"
                coin={true}
                title="Total Muftar Credits"
                amount={walletData?.data?.Credit_balance}
              />
              <CreditCard
                percentage="10"
                coin={true}
                title="Today Muftar Credits"
                amount={walletData?.data?.today_credits}
              />
              <CreditCard
                percentage="10"
                coin={false}
                title="Daily streak"
                amount="3 days"
              />
            </div>
          )}
          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <CardCover>
              <div className="flex flex-col gap-8 rounded-2xl bg-white p-6">
                <div>
                  <div className="mb-2 flex justify-center">
                    <ImageComp image="/images/gift-box.svg" />
                  </div>
                  <span className="flex justify-center text-center text-lg font-semibold text-muftar-gray-700">
                    Refer a friend to earn special rewards with Muftar.
                  </span>
                </div>
                <div className="flex items-start gap-3.5 rounded-2xl border border-muftar-gray-300 bg-[#FCFCFD] p-[18px]">
                  <ImageComp image="/images/caution-icon.svg" />
                  <span className="text-sm font-semibold text-muftar-gray-700">
                    Invite others to join Muftar for rewards; 100 credit per
                    successful referral (they join and verify)
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-lg font-semibold text-muftar-gray-800">
                    Your Rewards
                  </span>
                  <span className="text-base font-medium text-app-blue-100">
                    <span className="text-xl font-bold">0</span> free months
                    earned
                  </span>
                </div>
                <div className="inset-0 flex flex-wrap justify-between">
                  <Months months="0 months" checked={true} />
                  <Months months="3 months" checked={false} />
                  <Months months="6 months" checked={false} />
                  <Months months="9 months" checked={false} />
                </div>
              </div>
            </CardCover>
            <CardCover>
              <div className="flex flex-col rounded-2xl bg-white p-6">
                <div className="mb-4 flex flex-col gap-1">
                  <span className="text-lg font-semibold text-muftar-gray-800">
                    Invite your friends
                  </span>
                  <span className="text-base text-muftar-gray-600">
                    insert your friends’ email addresses and send them
                    invitations to join Muftar
                  </span>
                </div>
                <div className="mb-10 flex items-center gap-6">
                  <div className="w-full">
                    <FormInput
                      type="text"
                      placeholder="Enter email addresses"
                      header={false}
                    />
                  </div>
                  <CustomButton
                    text="Send Invitations"
                    className="border-none bg-app-blue-100 text-white"
                  />
                </div>
                <div className="mb-4 flex flex-col gap-1">
                  <span className="text-lg font-semibold text-muftar-gray-800">
                    Share the referral link
                  </span>
                  <span className="text-base text-muftar-gray-600">
                    You can also share your personal referral link by copying
                    and sending it or sharing it on your social media.
                  </span>
                </div>
                <div className="mb-6 w-full">
                  <FormInput type="text" value={textToCopy} header={false} />
                </div>
                <div className="flex flex-col items-center gap-6 md:flex-row">
                  <CopyToClipboard text={textToCopy} onCopy={handleCopy}>
                    <div className="w-[70%]">
                      <CustomButton
                        text={isCopied ? "Copied!" : "Copy Link"}
                        className="w-full border-none bg-app-blue-100 text-white"
                      />
                    </div>
                  </CopyToClipboard>

                  <div className="flex items-center gap-6">
                    <ImageComp
                      image="/images/twitter-fill.svg"
                      styles="cursor-pointer"
                    />
                    <ImageComp
                      image="/images/facebook-fill.svg"
                      styles="cursor-pointer"
                    />
                    <ImageComp
                      image="/images/linkedin-fill.svg"
                      styles="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
            </CardCover>
          </div>
          <Table headers={headers} body={body} title="Referred Contacts" />
        </section>
      </section>
    </NavBar>
  );
};

export default ReferralSystem;
