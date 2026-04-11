import { COLORs, FONT_SIZE } from "../../constants/theme"

export const styles = {
  btn: {
    width: "100%",
    paddingVertical: 16,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 8,
  },

  primary: {
    backgroundColor: COLORs.white,
  },

  danger: {
    backgroundColor: COLORs.danger,
  },

  text: {
    color: COLORs.background,
    fontSize: FONT_SIZE.md,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.5,
  },

  textDanger: {
    color: COLORs.white,
    fontSize: FONT_SIZE.md,
    fontWeight: "700",
    textAlign: "center",
    letterSpacing: 0.5,
  },
}