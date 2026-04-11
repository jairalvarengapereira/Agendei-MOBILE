import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  appointment: {
    backgroundColor: COLORs.surface,
    borderColor: COLORs.border,
    padding: 16,
    borderWidth: 1,
    borderRadius: 16,
    marginTop: 6,
    marginBottom: 6,
  },

  name: {
    fontSize: FONT_SIZE.md,
    color: COLORs.textPrimary,
    fontWeight: "700",
    marginBottom: 3,
  },

  specialty: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.primary,
    marginBottom: 12,
    letterSpacing: 0.3,
  },

  divider: {
    height: 1,
    backgroundColor: COLORs.border,
    marginBottom: 12,
  },

  container: {
    flexDirection: "row",
    alignItems: "center",
  },

  icon: {
    width: 18,
    height: 18,
    tintColor: COLORs.textSecondary,
    marginRight: 6,
  },

  booking: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 16,
  },

  bookingDate: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.textSecondary,
  },

  bookingHour: {
    fontSize: FONT_SIZE.sm,
    color: COLORs.textSecondary,
  },

  containerBooking: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },

  containerButton: {
    width: 160,
  },
}