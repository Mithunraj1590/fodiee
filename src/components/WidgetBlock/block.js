import HomeBanner from "@/widgets/HomeBanner";
import HomeAbout from "@/widgets/HomeAbout";
import HomeOffer from "@/widgets/HomeOffer"
import HomeSwiper from "@/widgets/HomeSwiper"
import HomeTopings from "@/widgets/HomeTopings"
import HomeAboutDetail from "@/widgets/HomeAboutDetail"
import HomeContact from "@/widgets/HomeContact"

const setComponent = (widget) => {
  const components = {
    HomeBanner,
    HomeAbout,
    HomeOffer ,
    HomeSwiper,
    HomeTopings,
    HomeAboutDetail,
    HomeContact,
  };
  return components[widget.widget_type] || components["default"];
};
const Block = ({
  widget,
  ssrDeviceType,
  saveFolderType,
  saveFolderId,
  slug,
}) => {
  const Widget = setComponent(widget);
  return (
    <Widget
      {...widget}
      ssrDeviceType={ssrDeviceType}
      saveFolderId={saveFolderId}
      saveFolderType={saveFolderType}
      slug={slug}
    />
  );
};

export default Block;
