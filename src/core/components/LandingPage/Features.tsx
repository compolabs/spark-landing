import Image from "next/image";
const Features = () => {
  return (
    <div>
      <div>Features</div>
      <Image
        src="/images/feature_mall_1.svg"
        alt="feature one"
        width={120}
        height={120}
        priority
      />
    </div>
  );
};

export default Features;
