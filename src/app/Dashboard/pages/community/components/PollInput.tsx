import { FormInput } from "../../../../../components/Input";
import ImageComp from "../../../../../components/Image";
import React, { ChangeEventHandler, useState } from "react";

interface InputField {
  id: number;
  value: string;
}

const DynamicInputFields: React.FC = () => {
  const [inputFields, setInputFields] = useState<InputField[]>([
    { id: 1, value: "" },
    { id: 2, value: "" },
  ]);

  const handleAddField = () => {
    const newField = { id: inputFields.length + 1, value: "" };
    setInputFields([...inputFields, newField]);
  };

  const handleRemoveField = (id: number) => {
    setInputFields(inputFields.filter((field) => field.id !== id));
  };

  const handleInputChange = (id: number, value: string) => {
    setInputFields(
      inputFields.map((field) =>
        field.id === id ? { ...field, value } : field,
      ),
    );
  };

  return (
    <div className="flex flex-col space-y-6">
      {inputFields.map((field) => (
        <div key={field.id} className="flex items-center justify-between">
          <div className="w-4/5">
            <FormInput
              id={`${field.id}`}
              placeholder={`option ${field.id}`}
              onChange={(event) =>
                handleInputChange(field.id, event.target.value)
              }
            />
          </div>
          <div className="flex items-center gap-4">
            {field.id > 2 && (
              <ImageComp
                image="/images/times-icon.svg"
                styles="cursor-pointer"
                handleClick={() => handleRemoveField(field.id)}
              />
            )}
            {inputFields.length === field.id && (
              <ImageComp
                image="/images/add-icon.svg"
                styles="cursor-pointer"
                handleClick={() => handleAddField()}
              />
            )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default DynamicInputFields;
