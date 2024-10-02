import Modal from "src/components/Modal";
import { CustomButton } from "src/components/ActionBtn";
import { FormInput, FormSelect, FormTextArea } from "src/components/Input";
import ModalCardHeader from "src/components/ModalCardHeader";
import ImageComp from "src/components/Image";
import Badge from "src/components/Badge";

interface PostJobProps {
  isOpen: boolean;
  closeModal: () => void;
}

const ViewJob = ({ isOpen, closeModal }: PostJobProps) => {
  return (
    <Modal isOpen={isOpen} className="flex items-center justify-center">
      <div
        className="w-full max-w-[640px] rounded-2xl bg-white pb-4"
        onClick={(e) => e.stopPropagation()}
      >
        <ModalCardHeader title="View Job Details" closeHandler={closeModal} />
        <div className="scroller flex max-h-[450px] flex-col gap-6 overflow-auto px-10 py-4">
          <div className="w-full">
            <div className="flex flex-col gap-4 border-b border-muftar-gray-400 pb-8">
              <span className="block text-base font-medium text-muftar-gray-600">
                Mufatr
              </span>
              <span className="text-app-3xl font-semibold text-muftar-gray-800">
                UI/UX Designer Figma
              </span>
              <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                  <ImageComp image="/images/location.svg" />
                  <span className="text-base font-medium text-muftar-gray-500">
                    Atlanta, Georgia, United States
                  </span>
                </div>
                <Badge
                  text={
                    <div className="flex items-center gap-2">
                      <ImageComp image="/images/job-dot.svg" />
                      <span>Full time</span>
                    </div>
                  }
                  background="bg-muftar-blue-light-50"
                  color="text-muftar-blue-light-700"
                />
              </div>
            </div>
            <div className="flex flex-col gap-8 pt-8">
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-muftar-gray-800">
                  About us
                </span>
                <span className="text-base text-muftar-gray-600">
                  M365Connect is spearheading innovation in European IT
                  staffing, marrying top-tier Microsoft talent with German
                  clientele through the fusion of human expertise and
                  cutting-edge AI tools.
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-muftar-gray-800">
                  Role overview
                </span>
                <span className="text-base text-muftar-gray-600">
                  Are you a visionary designer seeking to craft seamless digital
                  experiences? Join us as a UI/UX Designer at M365Connect.
                  You'll shape interfaces connecting elite Microsoft talent with
                  pioneering businesses, designing intuitive experiences that
                  redefine engagement.
                </span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-muftar-gray-800">
                  Key Responsibilities:
                </span>

                <ul className="list-disc text-base text-muftar-gray-600">
                  <li>
                    Craft visually compelling and user-centric designs for web
                    and mobile platforms that resonate with our target audience.
                  </li>

                  <li>
                    Collaborate closely with cross-functional teams to
                    conceptualize and implement UI/UX strategies aligned with
                    client needs and business goals.
                  </li>

                  <li>
                    Conduct user research, user testing, and iterate designs
                    based on feedback to ensure optimal user experiences.
                  </li>
                  <li>
                    Stay abreast of industry trends and emerging technologies to
                    infuse innovation into our design processes.
                  </li>
                  <li>
                    Translate complex technical requirements into elegant and
                    intuitive designs that simplify user interactions.
                  </li>
                </ul>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xl font-semibold text-muftar-gray-800">
                  Requirements:
                </span>

                <ul className="list-disc text-base text-muftar-gray-600">
                  <li>
                    Craft visually compelling and user-centric designs for web
                    and mobile platforms that resonate with our target audience.
                  </li>

                  <li>
                    Collaborate closely with cross-functional teams to
                    conceptualize and implement UI/UX strategies aligned with
                    client needs and business goals.
                  </li>

                  <li>
                    Conduct user research, user testing, and iterate designs
                    based on feedback to ensure optimal user experiences.
                  </li>
                  <li>
                    Stay abreast of industry trends and emerging technologies to
                    infuse innovation into our design processes.
                  </li>
                  <li>
                    Translate complex technical requirements into elegant and
                    intuitive designs that simplify user interactions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default ViewJob;
