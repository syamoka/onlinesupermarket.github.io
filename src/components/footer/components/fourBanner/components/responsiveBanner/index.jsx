import "./styles.scss";
// import fourBanner1 from "../../../../../../assets/fourBanner-images/footer-icon1.png";
// import fourBanner2 from "../../../../../../assets/fourBanner-images/footer-icon2.png";
// import fourBanner3 from "../../../../../../assets/fourBanner-images/footer-icon3.png";
// import fourBanner4 from "../../../../../../assets/fourBanner-images/footer-icon4.png";

export const ResponsiveBanner = () => {
  const data = [
    {
      id: 1,
      title: "Առաքում և վճարում",
      image: "https://supermarket.am/images/footer_icon1.png",
      page: "deliveryPayment",
    },

    {
      id: 2,
      title: " Հայաստանո՞ւմ չեք",
      image: "https://supermarket.am/images/footer_icon2.png",
      page: "abroad",
    },

    {
      id: 3,
      title: " Նորություններ",
      image:
        "http://localhost:3000/static/media/footer_icon3.89dec6867f297b22099b.png",
    },

    {
      id: 4,
      title: "  Առաջարկներ և բողոքներ",
      image:
        "data:image/png;base64,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",
      page: "SuggestAndComplaints",
    },
  ];

  return (
    <div className="responsive-banner">
      {data.map((banner) => {
        return (
          <div className="resp-banner-parent" key={banner.id}>
            <a href="" className="resp-banner">
              <img src={banner.image} alt="" className="resp-banner-image" />
            </a>
            <div className="resp-banner-title">{banner.title}</div>
          </div>
        );
      })}
    </div>
  );
};
