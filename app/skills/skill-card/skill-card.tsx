import { Card } from "antd";
import Title from "antd/es/typography/Title";
import classes from "./skill-card.module.scss";
import { Item } from "@/app/skills/skill-card/items";

interface IProps {
  items: Item[];
  title: string;
}
export default function SkillCard({ items, title }: IProps) {
  return (
    <Card className={classes.card}>
      <div className={classes.cardHeadline}>
        <Title level={5}>{title}</Title>
      </div>
      {items.map((item, key) => (
        <div key={key}>
          <div style={{ marginTop: "20px" }}>
            <Title style={{ fontSize: "14px" }} level={5}>
              • {item.title}
            </Title>
          </div>

          {item.subtitles.length > 0 && (
            <div style={{ marginTop: "20px", marginLeft: "10px" }}>
              {item.subtitles.map((subtitle, key) => (
                <Title key={key} className={classes.listItems} level={5}>
                  ◦ {subtitle}
                </Title>
              ))}
            </div>
          )}
        </div>
      ))}
    </Card>
  );
}
