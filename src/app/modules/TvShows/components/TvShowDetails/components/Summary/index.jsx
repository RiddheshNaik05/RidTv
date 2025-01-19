/* eslint-disable react/prop-types */
import dayjs from "dayjs";
import { Progress, Space } from "antd";
import Paragraph from "antd/es/typography/Paragraph";
import Title from "antd/es/typography/Title";
import { COLORS } from "../../../../../../utils/colors";
import React from "react";

const Summary = ({ data }) => {
  return (
    <div>
      <Title
        style={{
          fontWeight: 700,
          color: COLORS.WHITE,
          marginBottom: 0,
        }}
      >
        {data?.name}
      </Title>

      <Paragraph strong style={{ color: COLORS.WHITE }}>
        {dayjs(data.release_date).format("DD/MM/YYYY")} • {data.status} •{" "}
        {data.type}
      </Paragraph>

      {data.tagline && (
        <Paragraph
          strong
          style={{
            fontStyle: "italic",
            color: COLORS.TEXT_GREY,
            marginTop: -18,
          }}
        >
          {data.tagline}
        </Paragraph>
      )}

      <div style={{ marginBlock: 12 }}>
        <Space align="center" direction="horizontal">
          <Progress
            type="circle"
            strokeWidth={8}
            size={70}
            percent={parseInt((data.vote_average / 10) * 100)}
          />

          <Space direction="horizontal">
            <Paragraph strong style={{ color: COLORS.WHITE }}>
              User Score
            </Paragraph>
            <Paragraph strong style={{ color: COLORS.TEXT_GREY }}>
              {data.vote_average.toFixed(2)} | {data.vote_count} votes
            </Paragraph>
          </Space>
        </Space>
      </div>

      <Space direction="vertical">
        <Space direction="horizontal">
          <Paragraph
            strong
            style={{ color: COLORS.PRIMARY_RED, marginBottom: 0 }}
          >
            Genres:{" "}
          </Paragraph>
          <Paragraph style={{ color: COLORS.WHITE, marginBottom: 0 }}>
            {data.genres &&
              data.genres.map((genre, index) => (
                <React.Fragment key={genre.id}>
                  {genre?.name}
                  {index + 1 !== data.genres.length ? ", " : "."}
                </React.Fragment>
              ))}
          </Paragraph>
        </Space>

        <Space direction="horizontal">
          <Paragraph
            strong
            style={{ color: COLORS.PRIMARY_RED, marginBottom: 0 }}
          >
            Languages:{" "}
          </Paragraph>
          <Paragraph style={{ color: COLORS.WHITE, marginBottom: 0 }}>
            {data.spoken_languages &&
              data.spoken_languages.map((spoken_language, index) => (
                <React.Fragment key={spoken_language?.name}>
                  {spoken_language.english_name}
                  {index + 1 !== data.spoken_languages.length ? ", " : "."}
                </React.Fragment>
              ))}
          </Paragraph>
        </Space>
      </Space>

      <Title
        level={3}
        style={{
          fontWeight: 700,
          color: COLORS.WHITE,
          marginBottom: 0,
        }}
      >
        Overview
      </Title>
      <Paragraph style={{ fontSize: 16, color: COLORS.WHITE }}>
        {data.overview}
      </Paragraph>

      {data.created_by.length > 0 && (
        <>
          <Paragraph strong style={{ marginBottom: 0, color: COLORS.WHITE }}>
            Creator
          </Paragraph>
          <Paragraph strong style={{ color: COLORS.TEXT_GREY }}>
            {data.created_by[0].name}
          </Paragraph>
        </>
      )}
    </div>
  );
};

export default Summary;
