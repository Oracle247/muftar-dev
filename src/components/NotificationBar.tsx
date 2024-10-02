import ImageComp from "./Image";

interface NotificationBarProps {
  type?: "error" | "success" | "neutral";
  title: string;
  message?: string;
}

const NotificationBar = ({
  type = "neutral",
  title,
  message,
}: NotificationBarProps) => {
  return (
    <div
      className={`${type === "neutral" && "bg-muftar-gray-25 border-muftar-gray-300"} ${type === "error" && "bg-muftar-error-25 border-muftar-error-300"} ${type === "success" && "bg-muftar-success-25 border-muftar-success-300"} flex items-start gap-3.5 rounded-xl border p-4`}
    >
      {type === "neutral" && (
        <ImageComp image="/images/neutral-notification.svg" />
      )}
      {type === "error" && <ImageComp image="/images/error-notification.svg" />}
      {type === "success" && (
        <ImageComp image="/images/success-notification.svg" />
      )}
      <div className="flex flex-col justify-start gap-1">
        <p
          className={`${type === "neutral" && "text-muftar-gray-700"} ${type === "error" && "text-muftar-error-700"} ${type === "success" && "text-muftar-success-700"} text-sm font-semibold`}
        >
          {title}
        </p>
        <p
          className={`${type === "neutral" && "text-muftar-gray-700"} ${type === "error" && "text-muftar-error-700"} ${type === "success" && "text-muftar-success-700"} text-sm`}
        >
          {message}
        </p>
      </div>
    </div>
  );
};

export default NotificationBar;
