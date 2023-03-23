import * as React from "react";
import type { Program } from "src/utils/types";
import "./ProgramCard.css";
import { ReactComponent as Star } from "src/assets/star.svg";
import { formatTopicName } from "src/utils/hooks";

export const ProgramCard = ({
  title,
  topic,
  learningFormats,
  bestseller,
}: Partial<Program>): JSX.Element => {
  const formattedTopic = formatTopicName(topic ?? "");

  return (
    <div className="program-card-container">
      <div className="space-between">
        <h3 className="title">{title}</h3>
        {bestseller && (
          <div className="best-seller">
            <Star width={20} height={20} />
            Best seller
          </div>
        )}
      </div>
      <hr className="divider" />
      <div className="space-between">
        <p className="topic">{formattedTopic}</p>
        <p>
          {learningFormats?.map((format, i) => (
            <React.Fragment key={format}>
              <span className="learning-format">{format}</span>
              <span>{i !== learningFormats.length - 1 && "•"}</span>
            </React.Fragment>
          ))}
        </p>
      </div>
    </div>
  );
};
