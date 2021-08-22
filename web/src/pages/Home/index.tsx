import { Form } from "../../components/Form";
import { Layout } from "../../components/Layout";

import { Content } from "./styles";

function Home() {
  return (
    <Layout>
      <Content>
        <h2>Create User</h2>

        <Form type="create" />
      </Content>
    </Layout>
  );
}

export { Home };
