import { COLORs, FONT_SIZE } from "../../constants/theme.js"

export const styles = {
  container: {
    flex: 1,
    backgroundColor: COLORs.background,
    paddingBottom: 50,
  },

  calendar: {
    backgroundColor: COLORs.surface,
    borderBottomWidth: 1,
    borderBottomColor: COLORs.border,
  },

  theme: {
    backgroundColor: COLORs.surface,
    calendarBackground: COLORs.surface,
    textSectionTitleColor: COLORs.textSecondary,
    dayTextColor: COLORs.textPrimary,
    todayTextColor: COLORs.primary,
    selectedDayBackgroundColor: COLORs.primary,
    selectedDayTextColor: COLORs.white,
    inactiveDayTextColor: COLORs.border,
    monthTextColor: COLORs.textPrimary,
    arrowColor: COLORs.primary,
    textDisabledColor: COLORs.border,
    dotColor: COLORs.primary,
    indicatorColor: COLORs.primary,
  },

  textHour: {
    fontSize: FONT_SIZE.md,
    fontWeight: "700",
    color: COLORs.textPrimary,
    marginTop: 20,
    marginLeft: 16,
    marginBottom: 4,
    letterSpacing: 0.3,
  },

  pickerWrapper: {
    marginHorizontal: 16,
    backgroundColor: COLORs.surfaceLight,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: COLORs.border,
    overflow: "hidden",
  },

  boxHour: {
    marginLeft: 16,
    marginRight: 16,
  },

  botao: {
    marginLeft: 16,
    marginRight: 16,
  },
}