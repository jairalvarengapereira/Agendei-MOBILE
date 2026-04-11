import { COLORs, FONT_SIZE } from "../../constants/theme"

export const styles = {
  btn: {
    width: "100%",
    paddingVertical: 10,
    paddingHorizontal: 16,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 4,
  },

  primary: {
    backgroundColor: COLORs.primary,
  },

  danger: {
    backgroundColor: COLORs.danger,
  },

  text: {
    color: COLORs.white,
    fontSize: FONT_SIZE.sm,
    fontWeight: "600",
    textAlign: "center",
  },

  textDanger: {
    color: COLORs.white,
    fontSize: FONT_SIZE.sm,
    fontWeight: "600",
    textAlign: "center",
  },
}