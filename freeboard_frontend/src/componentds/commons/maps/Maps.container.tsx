declare const window: typeof globalThis & {
  kakao: any;
};

export default function MapsPage() {
  return (
    <>
      <div id="map" style={{ width: "500px", height: "400px" }}></div>
    </>
  );
}
