import { COLORs, FONT_SIZE } from "../../constants/theme"

export const styles = {
  btn: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
  },

  primary: {
    backgroundColor: COLORs.primary,
  },

  danger: {
    backgroundColor: COLORs.danger,
  },

  text: {
    color: "#0A0F1E",
    fontSize: FONT_SIZE.md,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.3,
  },

  textDanger: {
    color: COLORs.white,
    fontSize: FONT_SIZE.md,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.3,
  },
}