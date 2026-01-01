import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Blog - MiPiBoy";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

const getAssetData = async () => {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL;

    const fontUrls = {
      clashDisplay: `${baseUrl}/fonts/ClashDisplay-Semibold.ttf`,
      cabinetGrotesk: `${baseUrl}/fonts/CabinetGrotesk-Medium.ttf`,
      yekanBakh: `${baseUrl}/fonts/200-YekanBakh-Thin.woff`,
      yekanBakhLight: `${baseUrl}/fonts/300-YekanBakh-Light.woff`,
      yekanBakhRegular: `${baseUrl}/fonts/400-YekanBakh-Regular.woff`,
      yekanBakhSemiBold: `${baseUrl}/fonts/500-YekanBakh-SemiBold.woff`,
      yekanBakhBold: `${baseUrl}/fonts/600-YekanBakh-Bold.woff`,
      yekanBakhExtraBold: `${baseUrl}/fonts/700-YekanBakh-ExtraBold.woff`,
      yekanBakhBlack: `${baseUrl}/fonts/800-YekanBakh-Black.woff`,
      yekanBakhExtraBlack: `${baseUrl}/fonts/900-YekanBakh-ExtraBlack.woff`,
      logo: `${baseUrl}/mipiboy-logo.png`,
    };

    const [clashDisplayRes, cabinetGroteskRes, yekanBakhRes, yekanBakhLightRes, yekanBakhRegularRes, yekanBakhSemiBoldRes, yekanBakhBoldRes, yekanBakhExtraBoldRes, yekanBakhBlackRes, yekanBakhExtraBlackRes, logoRes] = await Promise.all([
      fetch(fontUrls.clashDisplay),
      fetch(fontUrls.cabinetGrotesk),
      fetch(fontUrls.yekanBakh),
      fetch(fontUrls.yekanBakhLight),
      fetch(fontUrls.yekanBakhRegular),
      fetch(fontUrls.yekanBakhSemiBold),
      fetch(fontUrls.yekanBakhBold),
      fetch(fontUrls.yekanBakhExtraBold),
      fetch(fontUrls.yekanBakhBlack),
      fetch(fontUrls.yekanBakhExtraBlack),
      fetch(fontUrls.logo),
    ]);

    if (!clashDisplayRes.ok || !cabinetGroteskRes.ok || !yekanBakhRes.ok || !yekanBakhLightRes.ok || !yekanBakhRegularRes.ok || !yekanBakhSemiBoldRes.ok || !yekanBakhBoldRes.ok || !yekanBakhExtraBoldRes.ok || !yekanBakhBlackRes.ok || !yekanBakhExtraBlackRes.ok || !logoRes.ok) {
      return null;
    }

    const [clashDisplay, cabinetGrotesk, yekanBakh, yekanBakhLight, yekanBakhRegular, yekanBakhSemiBold, yekanBakhBold, yekanBakhExtraBold, yekanBakhBlack, yekanBakhExtraBlack, logoImage] = await Promise.all([
      clashDisplayRes.arrayBuffer(),
      cabinetGroteskRes.arrayBuffer(),
      yekanBakhRes.arrayBuffer(),
      yekanBakhLightRes.arrayBuffer(),
      yekanBakhRegularRes.arrayBuffer(),
      yekanBakhSemiBoldRes.arrayBuffer(),
      yekanBakhBoldRes.arrayBuffer(),
      yekanBakhExtraBoldRes.arrayBuffer(),
      yekanBakhBlackRes.arrayBuffer(),
      yekanBakhExtraBlackRes.arrayBuffer(),
      logoRes.arrayBuffer(),
    ]);

    const logoBase64 = `data:image/png;base64,${Buffer.from(logoImage).toString(
      "base64"
    )}`;

    return {
      clashDisplay,
      cabinetGrotesk,
      yekanBakh,
      yekanBakhLight,
      yekanBakhRegular,
      yekanBakhSemiBold,
      yekanBakhBold,
      yekanBakhExtraBold,
      yekanBakhBlack,
      yekanBakhExtraBlack,
      logoBase64,
    };
  } catch (error) {
    console.error("Failed to load assets:", error);
    return null;
  }
};

const styles = {
  wrapper: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: "40px",
  },
  container: {
    height: "100%",
    width: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    border: "4px solid black",
    padding: "60px",
  },
  title: {
    fontSize: "64px",
    color: "black",
    marginBottom: "10px",
    textAlign: "center",
    fontFamily: "YekanBakh",
    letterSpacing: "0.5px",
  },
  description: {
    fontSize: "28px",
    color: "black",
    textAlign: "center",
    maxWidth: "800px",
    fontFamily: "YekanBakh",
    letterSpacing: "0.5px",
    border: "3px solid black",
    padding: "10px 15px",
    borderRadius: "100px",
  },
} as const;

export default async function Image() {
  try {
    const assetData = await getAssetData();

    return new ImageResponse(
      (
        <div
          style={{
            ...styles.wrapper,
            fontFamily: assetData ? "YekanBakh" : "system-ui",
          }}
        >
          <div style={styles.container}>
            <img
              src={
                assetData?.logoBase64 ||
                `${process.env.NEXT_PUBLIC_SITE_URL}/mipiboy-logo.png`
              }
              alt="MiPiBoy Logo"
              width={100}
              height={100}
            />
            <h1 style={styles.title}>Blog</h1>
            <p style={styles.description}>
              A blog about design, development, and other things.
            </p>
          </div>
        </div>
      ),
      {
        ...size,
        fonts: assetData
          ? [
              {
                name: "Clash Display",
                data: assetData.clashDisplay,
                weight: 500,
                style: "normal",
              },
              {
                name: "Cabinet Grotesk",
                data: assetData.cabinetGrotesk,
                weight: 500,
                style: "normal",
              },
              {
                name: "YekanBakh",
                data: assetData.yekanBakh,
                weight: 200,
                style: "normal",
              },
              {
                name: "YekanBakhLight",
                data: assetData.yekanBakhLight,
                weight: 300,
                style: "normal",
              },
              {
                name: "YekanBakhRegular",
                data: assetData.yekanBakhRegular,
                weight: 400,
                style: "normal",
              },
              {
                name: "YekanBakhSemiBold",
                data: assetData.yekanBakhSemiBold,
                weight: 500,
                style: "normal",
              },
              {
                name: "YekanBakhBold",
                data: assetData.yekanBakhBold,
                weight: 600,
                style: "normal",
              },
              {
                name: "YekanBakhExtraBold",
                data: assetData.yekanBakhExtraBold,
                weight: 700,
                style: "normal",
              },
              {
                name: "YekanBakhBlack",
                data: assetData.yekanBakhBlack,
                weight: 800,
                style: "normal",
              },
              {
                name: "YekanBakhExtraBlack",
                data: assetData.yekanBakhExtraBlack,
                weight: 900,
                style: "normal",
              },
            ]
          : undefined,
      }
    );
  } catch (error) {
    console.error("Error generating image:", error);
    return new Response(
      `Failed to generate image: ${
        error instanceof Error ? error.message : "Unknown error"
      }`,
      {
        status: 500,
      }
    );
  }
}
