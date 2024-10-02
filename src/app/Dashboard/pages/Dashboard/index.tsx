import React, { useEffect, useState } from "react";
import ActionBtn, { ActionGoogleBtn } from "src/components/ActionBtn";
import Modal from "src/components/Modal";
import OnBoardingCard from "src/components/OnBoardingCard";
import ImageComp from "src/components/Image";
import NavBar from "src/components/navigation/NavBar";
import { cardsContent } from "./constant";
import DashboardCard from "src/components/Dashboard/DashboardCard";
import CardCover from "src/components/Dashboard/CardCover";
import useAuth from "src/hooks/useAuth";
import useDashboard from "src/hooks/useDashboard";
import { useOnBoardingMutation } from "src/api/authApiSlice";
import { useNavigate } from "react-router-dom";
import IdVerifcation from "src/app/auth/IdVerifcation";
import { handleResponse } from "src/helpers/helperFunction";
import { useDispatch } from "react-redux";
import {
  setBoardingCredentials,
  setIdValidated,
} from "src/features/dashboards/dashboardSlice";
import { setCredentials } from "src/features/auth/authSlice";
import { useGetProfileQuery } from "src/api/profileSlice";
import PageSkeleton from "./components/PageSkeleton";

const MainDashboard = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, tokens } = useAuth();
  const { skipped, completed, idValidated } = useDashboard();
  const [isModalOpen, setIsModalOpen] = React.useState<boolean>(true);
  const [skipComp, setSkipComp] = React.useState<boolean>(false);
  const [cardNumber, setCardNumber] = React.useState<number>(1);

  const [onBoarding, onBoardingResult] = useOnBoardingMutation();
  const { data } = useGetProfileQuery(user?.id);

  useEffect(() => {
    if (!tokens) {
      navigate("/");
    }
  }, [tokens]);

  const handleRequest = async (status: string) => {
    const formData = { id: user?.id, action: status };
    try {
      const onBoardingResponse = await onBoarding(formData).unwrap();
      handleResponse(onBoardingResponse);
      if (
        onBoardingResponse.status === "success" &&
        onBoardingResponse.message ===
          "User onboarding status updated successfully"
      ) {
        dispatch(
          setBoardingCredentials({
            skip: status === "skip",
            complete: status === "complete",
          }),
        );
        dispatch(
          setCredentials({
            token: tokens,
            data: {
              ...data?.data?.user,
              onboarding_skipped: status === "skip",
              onboarding_completed: status === "complete",
            },
          }),
        );
      }
    } catch (error: any) {
      handleResponse(error?.data);
    }
  };

  const nextHandler = () => {
    if (cardNumber < 8) {
      setCardNumber(cardNumber + 1);
    }
  };

  const prevHandler = () => {
    if (cardNumber > 1) {
      setCardNumber(cardNumber - 1);
    }
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  if (onBoardingResult?.isLoading) {
    return <PageSkeleton />;
  }

  return (
    <>
      <NavBar>
        {!idValidated && (
          <Modal
            isOpen={!idValidated}
            className="flex items-center justify-center"
          >
            <IdVerifcation
              id={`${user?.id}`}
              closeHandler={() => {
                dispatch(
                  setIdValidated({
                    validated: true,
                  }),
                );
              }}
            />
          </Modal>
        )}
        {idValidated && !skipped && !completed && (
          <Modal
            isOpen={isModalOpen}
            className="flex items-center justify-center"
          >
            {cardNumber === 1 && !skipComp && (
              <OnBoardingCard
                title="Welcome to Muftar!"
                image="/images/onboarding-1.svg"
                percentage="0%"
                style="w-[3%]"
              >
                <div className="flex items-center justify-between">
                  <ActionGoogleBtn
                    text="Skip"
                    className="max-w-[130px] py-3"
                    onClick={() => setSkipComp(true)}
                  />
                  <ActionBtn
                    text="Get Started"
                    className="max-w-[130px] py-3"
                    onClick={nextHandler}
                  />
                </div>
              </OnBoardingCard>
            )}
            {cardsContent?.map((card) => {
              if (cardNumber !== 1 && cardNumber !== 8 && !skipComp) {
                return (
                  <div
                    key={card?.id}
                    className={`${card?.id === cardNumber ? "block" : "hidden"}`}
                  >
                    <OnBoardingCard
                      title={card?.title}
                      subtitle={card?.subtitle}
                      image={card?.image}
                      percentage={card?.percentage}
                      style={`${card?.style}`}
                    >
                      <div className="flex items-center justify-between">
                        <ActionGoogleBtn
                          text="Previous"
                          className="max-w-[108px] py-3"
                          onClick={prevHandler}
                        />
                        <ActionBtn
                          text="Next"
                          className="max-w-[114px] py-3"
                          onClick={nextHandler}
                        />
                      </div>
                    </OnBoardingCard>
                  </div>
                );
              }
            })}
            {cardNumber === 8 && !skipComp && (
              <OnBoardingCard
                title="Finish"
                subtitle="You're all set! Explore Muftar and start managing your logistics."
                image="/images/onboarding-8.svg"
                percentage="100%"
                style="w-[100%]"
              >
                <div className="flex items-center justify-between">
                  <ActionGoogleBtn
                    text="Previous"
                    className="max-w-[108px] py-3"
                    onClick={prevHandler}
                  />
                  <ActionBtn
                    text="Go to dashboard"
                    className="max-w-[169px] py-3"
                    onClick={() => {
                      setIsModalOpen(false);
                      handleRequest("complete");
                    }}
                  />
                </div>
              </OnBoardingCard>
            )}
            {skipComp && (
              <div className="flex max-w-[480px] flex-col items-center rounded-xl bg-white px-8 py-6">
                <ImageComp
                  image="/images/card-warning.svg"
                  styles="mb-4"
                  width={48}
                  height={48}
                />

                <div className="mb-12">
                  <p className="mb-1 text-center text-lg font-semibold text-[#912018]">
                    Skip Onboarding
                  </p>
                  <p className="mb-1 text-center text-lg text-app-gray-200">
                    You are about to Skip the onboarding process, you will miss
                    out on{" "}
                    <span className="font-semibold">150 free credits.</span>
                  </p>
                </div>
                <div className="flex w-full items-center gap-3">
                  <ActionGoogleBtn
                    text="Cancel"
                    className="max-w-[202px] py-3"
                    type="button"
                    onClick={() => {
                      setSkipComp(false);
                      setCardNumber(1);
                    }}
                  />
                  <ActionBtn
                    text="Skip"
                    type="button"
                    className="max-w-[202px] bg-[#DC6803] py-3"
                    onClick={() => {
                      setSkipComp(false);
                      setCardNumber(1);
                      openModal();
                      closeModal();
                      handleRequest("skip");
                    }}
                  />
                </div>
              </div>
            )}
          </Modal>
        )}
        <section className="mt-10 px-4 md:px-16">
          <div className="mb-10 flex w-full items-center gap-6 overflow-x-scroll no-scrollbar md:justify-start">
            <DashboardCard
              percentage="10"
              showPercentage={true}
              coin={true}
              title="Today Muftar Credits"
              amount="200"
            />
            <DashboardCard
              percentage="10"
              showPercentage={true}
              coin={true}
              title="Available Muftar Credits"
              amount="100k"
            />
            <DashboardCard
              percentage="10"
              showPercentage={true}
              coin={false}
              title="Daily streak"
              amount="3 days"
            />
            <DashboardCard
              percentage="10"
              showPercentage={false}
              coin={false}
              title="Total Tasks"
              amount="34"
            />
          </div>

          <div className="mb-10 flex w-full flex-col">
            <p className="text-xl font-bold text-app-gray-500">
              Complete 10 tasks
            </p>

            <div className="flex w-full items-center gap-3">
              <div className="my-2.5 h-2 w-full rounded-lg bg-[#EAECF0]">
                <div
                  className={`h-full w-[60%] rounded-lg bg-app-blue-100`}
                ></div>
              </div>
              <p className="text-lg font-medium text-app-gray-300">6/10</p>
            </div>
            <p className="text-xl text-app-gray-200">Earn 100 Muftar Credits</p>
          </div>

          <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-3">
            <CardCover
              title=" Top Communities"
              image="/images/top-communities.svg"
              button={
                <div className="w-full max-w-20">
                  <ActionGoogleBtn text="Explore" />
                </div>
              }
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-3 rounded-xl border border-app-border p-3">
                  <ImageComp image="/images/network.svg" />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-app-gray-500">
                      Networking Community
                    </p>
                    <p className="text-xs text-app-gray-300">
                      Sandra posted 3 hours ago
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-3 rounded-xl border border-app-border p-3">
                  <ImageComp image="/images/network.svg" />
                  <div className="flex flex-col gap-1">
                    <p className="font-semibold text-app-gray-500">Business</p>
                    <div className="flex items-center gap-1">
                      <ImageComp image="/images/chat.svg" />
                      <p className="text-xs text-app-gray-300">
                        Sandra replied to a comment 3 hours ago
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardCover>
            <CardCover
              title="Achievements"
              button={
                <div className="w-full max-w-[104px]">
                  <ActionGoogleBtn text="View more" />
                </div>
              }
            >
              <div className="flex items-start gap-2">
                <ImageComp image="/images/badge.svg" />
                <div className="flex flex-col gap-2">
                  <p className="font-semibold text-app-gray-500">
                    20 Muftar Credits
                  </p>
                  <p className="text-app-gray-200">
                    Achieve on-time delivery for a certain number of shipments
                    or maintain a high on-time delivery rate.
                  </p>
                  <div className="flex w-full items-center gap-3 py-2.5">
                    <div className="h-2 w-full rounded-lg bg-[#EAECF0]">
                      <div
                        className={`h-full w-[70%] rounded-lg bg-[#F59C42]`}
                      ></div>
                    </div>
                    <p className="text-lg font-medium text-app-gray-300">
                      7/10
                    </p>
                  </div>
                </div>
              </div>
            </CardCover>
            <CardCover
              title="Referral Program"
              button={
                <div className="w-full max-w-[100px]">
                  <ActionGoogleBtn text="Show now" />
                </div>
              }
            >
              <div className="flex flex-col gap-2">
                <div className="flex items-center gap-2">
                  <ImageComp image="/images/referral-1.svg" />
                  <p className="text-app-gray-300">
                    Share your unique referral link with friends
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <ImageComp image="/images/referral-2.svg" />
                  <p className="text-app-gray-300">
                    You get $25 for each succseful referral
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <ImageComp image="/images/referral-3.svg" />
                  <p className="text-app-gray-300">
                    Refer as many friends as you want and earn unlimited rewards
                  </p>
                </div>
              </div>
            </CardCover>
          </div>
          {/* <div className="mb-10 grid grid-cols-1 gap-10 md:grid-cols-2"> */}

          <div className="mb-10 flex flex-wrap gap-10 xl:flex-nowrap">
            <div className="w-full lg:w-[50%]">
              <CardCover
                title="Latest Jobs"
                button={
                  <div className="w-full max-w-[132px]">
                    <ActionGoogleBtn text="View more jobs" />
                  </div>
                }
              >
                <div className="flex flex-wrap gap-4 xl:flex-nowrap">
                  {[1, 2].map((index) => (
                    <div
                      className="flex w-full max-w-[286px] flex-col gap-4 rounded-lg border border-[#DDDDDD] p-4"
                      key={index}
                    >
                      <div className="flex items-start gap-4">
                        <ImageComp image="/images/google-2.svg" />
                        <div className="flex flex-col gap-1">
                          <p className="font-semibold text-app-gray-300">
                            Logistics Specialist
                          </p>
                          <p className="text-sm text-app-gray-300">Muftar</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4">
                        <p className="rounded-2xl bg-[#F2F4F7] px-2 py-1 text-xs text-app-gray-500">
                          Fulltime
                        </p>
                        <p className="rounded-2xl bg-[#F2F4F7] px-2 py-1 text-xs text-app-gray-500">
                          Remote
                        </p>
                        <p className="rounded-2xl bg-[#F2F4F7] px-2 py-1 text-xs text-app-gray-500">
                          Internship
                        </p>
                      </div>
                      <div className="flex items-center justify-between">
                        <p className="text-sm text-[#5E5E5E]">
                          2 days ago{" "}
                          <span className="font-semibold">- 40 Applicants</span>
                        </p>
                        <ImageComp image="/images/bookmark.svg" alt="icon" />
                      </div>
                    </div>
                  ))}
                </div>
              </CardCover>
            </div>

            <div className="w-full lg:w-[50%]">
              <CardCover
                title="Top Organizations"
                button={
                  <div className="w-full max-w-[100px]">
                    <ActionGoogleBtn text="View more" />
                  </div>
                }
              >
                <div className="flex flex-wrap gap-2 md:flex-nowrap">
                  <div className="flex w-full max-w-[190px] flex-col rounded-lg border border-[#D0D5DD] p-4">
                    <ImageComp
                      image="/images/muftar.svg"
                      alt="logo"
                      styles="mb-3"
                      width={32}
                      height={32}
                    />
                    <p className="mb-2 font-semibold text-app-gray-500">
                      Muftar
                    </p>
                    <p className="max-w-[143px] rounded-2xl bg-[#F2F4F7] px-2.5 py-[2px] text-sm font-medium text-app-gray-500">
                      Shipper / Receiver
                    </p>
                  </div>
                  <div className="flex w-full max-w-[190px] flex-col rounded-lg border border-[#D0D5DD] p-4">
                    <ImageComp
                      image="/images/muftar.svg"
                      alt="logo"
                      styles="mb-3"
                      width={32}
                      height={32}
                    />
                    <p className="mb-2 font-semibold text-app-gray-500">
                      Ocean Express Inc.
                    </p>
                    <div className="max-w-16">
                      <p className="max-w-[143px] rounded-2xl bg-[#EFF8FF] px-2.5 py-[2px] text-sm font-medium text-[#175CD3]">
                        Broker
                      </p>
                    </div>
                  </div>
                  <div className="flex w-full max-w-[190px] flex-col rounded-lg border border-[#D0D5DD] p-4">
                    <ImageComp
                      image="/images/muftar.svg"
                      alt="logo"
                      styles="mb-3"
                      width={32}
                      height={32}
                    />
                    <p className="mb-2 font-semibold text-app-gray-500">
                      Ocean Express Inc.
                    </p>
                    <div className="max-w-16">
                      <p className="max-w-[143px] rounded-2xl bg-[#FFF4ED] px-2.5 py-[2px] text-sm font-medium text-[#B93815]">
                        Carrier
                      </p>
                    </div>
                  </div>
                </div>
              </CardCover>
            </div>
          </div>
        </section>
      </NavBar>
    </>
  );
};

export default MainDashboard;
