import Image from "next/image";

export default function PromotionCard() {
  return (
    <section className="grid grid-cols-5 gap-4 justify-between my-8">
      <div className="bg-blue-50 shadow-sm">
        <Image
          src="/produtos/nike.png"
          alt="foto tenis 1"
          width={300}
          height={144}
        />
      </div>
      <div className="bg-blue-50 shadow-sm">
        <Image
          src="/produtos/tenis.jpg"
          alt="foto tenis 1"
          width={300}
          height={144}
        />
      </div>
      <div className="bg-blue-50 shadow-sm">
        <Image
          src="/produtos/sport.jpeg"
          alt="foto tenis 1"
          width={300}
          height={144}
        />
      </div>
      <div className="bg-blue-50 shadow-sm">
        <Image
          src="/produtos/tenis2.jpeg"
          alt="foto tenis 1"
          width={300}
          height={144}
        />
      </div>
      <div className="bg-blue-50 shadow-sm">
        <Image
          src="/produtos/tenis3.jpeg"
          alt="foto tenis 1"
          width={300}
          height={144}
        />
      </div>
    </section>
  );
}
