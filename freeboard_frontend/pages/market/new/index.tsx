import { withAuth } from "../../../src/commons/hocs/withAuth";
import ProductNewPage from "../../../src/componentds/units/market/new/ProductNew.container";
import ProductWritePage from "../../../src/componentds/units/market/write/ProductWrite.conatiner";

function ProductWrite() {
  return <ProductNewPage isEdit={false} />;
}

export default withAuth(ProductWrite);
