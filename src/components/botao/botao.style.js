import { COLORs, FONT_SIZE } from "../../constants/theme"

export const styles = {
  btn: {
    width: "100%",
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 0,
  },

  primary: {
    backgroundColor: COLORs.primary,
  },

  danger: {
    backgroundColor: COLORs.danger,
  },

  text: {
    color: COLORs.white,
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
  },

  textDanger: {
    color: COLORs.white,
    fontSize: 11,
    fontWeight: "600",
    textAlign: "center",
  },
}