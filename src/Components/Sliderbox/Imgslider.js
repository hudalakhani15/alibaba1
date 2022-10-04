import SimpleImageSlider from "react-simple-image-slider";

const images = [
  { url: "https://s.alicdn.com/@img/imgextra/i4/O1CN01a2389G27CadvuNI6r_!!6000000007761-2-tps-990-400.png" },
  { url: "https://s.alicdn.com/@img/imgextra/i2/O1CN01knDsow1yGrmU0qJ2c_!!6000000006552-2-tps-990-400.png" },
  { url: "https://s.alicdn.com/@img/imgextra/i3/O1CN01gc6DPm1VpYw3o1vWJ_!!6000000002702-2-tps-990-400.png" },
  { url: "https://s.alicdn.com/@img/imgextra/i3/O1CN01M9x0R41VzdeRW8FYF_!!6000000002724-0-tps-990-400.jpg" },
  { url: "https://s.alicdn.com/@img/imgextra/i2/O1CN01rYC4hI1lJzSxuJUm1_!!6000000004799-2-tps-990-400.png" },
  { url: "https://s.alicdn.com/@img/imgextra/i1/O1CN01AAmzwV1GWaIkhRPMg_!!6000000000630-2-tps-990-400.png" },
  { url: "https://s.alicdn.com/@img/imgextra/i2/O1CN01yLb4Os1VsJKLgXH5W_!!6000000002708-0-tps-990-400.jpg" },
];

const Imgslider = () => {
  return (
    <div>
        {/* <img src="https://s.alicdn.com/@img/imgextra/i2/O1CN01UKsNwd1QnfAFepFwM_!!6000000002021-2-tps-990-400.png " /> */}
      <SimpleImageSlider
        width={800}
        height={400}
        images={images}
        showBullets={true}
        showNavs={true}
        autoPlay={true}
        style={{margin:"0 1rem" }}
      />
    </div>
  );
}

export default Imgslider