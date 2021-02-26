const COMPONENTS_THEME_TYPE = ["default", "primary", "success", "warning", "danger", "info"];

export const validateType = value => {
  if (COMPONENTS_THEME_TYPE.includes(value)) {
    return true;
  }
  console.error("theme types is not contains " + value);
  return false;
}
