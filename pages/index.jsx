import GroceryLayout from "components/layout/GroceryLayout";
import { H1, Paragraph } from "components/Typography";
import PageFooter from "components/page-footer/PageFooter";

const IndexPage = () => {
  return (
    <GroceryLayout showNavbar={false}>
      <H1 lineHeight={1.1} mt="1.5rem">
        Your order is completed!
      </H1>
      <PageFooter />
    </GroceryLayout>
  );
};
export async function getStaticProps() {
  return {
    props: {
      data:""
    },
  };
}
export default IndexPage;
