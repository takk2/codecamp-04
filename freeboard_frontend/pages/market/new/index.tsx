import { withAuth } from "../../../src/commons/hocs/withAuth";
import ProductWritePage from "../../../src/componentds/units/market/write/ProductWrite.conatiner";

function ProductWrite() {
  return <ProductWritePage />;
}

export default withAuth(ProductWrite);
