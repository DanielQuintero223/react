import React from "react";
import { Card } from "antd";
const { Meta } = Card;

export default function Admin() {
  return (
    <div>
      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="Mazda"
              src="https://siempreauto.com/wp-content/uploads/sites/9/2021/07/P1J17470l.jpg?quality=60&strip=all&w=1200"
            />
          }
        >
          <Meta title="Mazda" description="https://www.mazda.com.co/" />
        </Card>
      </div>

      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="Subaru"
              src="https://periodismodelmotor.com/wp-content/uploads/2022/03/historia-subaru-impreza-wrx-sti.jpg"
            />
          }
        >
          <Meta title="Subaru" description="https://www.subarucolombia.com/" />
        </Card>
      </div>

      <div>
        <Card
          hoverable
          style={{ width: 240 }}
          cover={
            <img
              alt="Kia"
              src="https://www.elespectador.com/resizer/0pfZyu_1ADQkjvUGb4FpVOXAizE=/968x645/filters:format(jpeg)/cloudfront-us-east-1.images.arcpublishing.com/elespectador/ANIDPZMZDNEO3JLFDISH7ZI46M.jpg"
            />
          }
        >
          <Meta title="Kia" description="https://www.kia.com.co/" />
        </Card>
      </div>
    </div>
  );
}
