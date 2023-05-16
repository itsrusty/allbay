import { ArrowDownOutlined, ArrowUpOutlined } from "@ant-design/icons";
import { Card, Col, Row, Statistic } from "antd";
const App = () => (
  <Row gutter={16}>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Subidas"
          value={11.28}
          precision={2}
          valueStyle={{
            color: "#3f8600",
          }}
          prefix={<ArrowUpOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
    <Col span={12}>
      <Card bordered={false}>
        <Statistic
          title="Ausencia"
          value={9.3}
          precision={2}
          valueStyle={{
            color: "#cf1322",
          }}
          prefix={<ArrowDownOutlined />}
          suffix="%"
        />
      </Card>
    </Col>
  </Row>
);
export default App;
