"use client";

import { Card, Col, Row } from "antd";
import Title from "antd/es/typography/Title";
import classes from "./skills.module.css";
import {
  firstCardItems,
  Item,
  secondCardItems,
  thirdCardItems,
} from "@/app/skills/skill-card/items";
import SkillCard from "@/app/skills/skill-card/skill-card";
import { aboutMe, headline } from "@/app/skills/texts";

interface Card {
  title: string;
  items: Item[];
}

export default function Skills() {
  const cards: Card[] = [
    {
      title: "Web development",
      items: firstCardItems,
    },
    {
      title: "Software development",
      items: secondCardItems,
    },
    {
      title: "Tools & Other",
      items: thirdCardItems,
    },
  ];

  return (
    <div>
      <Row className={classes.TitleWrapper}>
        <Col span={24}>
          <Title className={classes.title} level={2}>
            About Me
          </Title>
        </Col>
      </Row>
      <Row>
        <Col span={24}>
          <Card className={classes.card}>
            <div style={{ textAlign: "center" }}>
              <Title className={classes.sentence} level={2}>
                {headline}
              </Title>
              <Title className={classes.story} level={5}>
                {aboutMe}
              </Title>
            </div>
          </Card>
        </Col>
      </Row>
      <Row justify="space-around" className={classes.cards}>
        {cards.map(({ items, title }, key) => (
          <Col key={key} xs={24} sm={12} md={7}>
            <SkillCard items={items} title={title} />
          </Col>
        ))}
      </Row>
    </div>
  );
}
