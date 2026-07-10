/* @ds-bundle: {"format":3,"namespace":"Studio9DNDesignSystem_7fd16e","components":[{"name":"Avatar","sourcePath":"components/data-display/Avatar.jsx"},{"name":"Badge","sourcePath":"components/data-display/Badge.jsx"},{"name":"Card","sourcePath":"components/data-display/Card.jsx"},{"name":"Stat","sourcePath":"components/data-display/Stat.jsx"},{"name":"Tag","sourcePath":"components/data-display/Tag.jsx"},{"name":"Accordion","sourcePath":"components/feedback/Accordion.jsx"},{"name":"Dialog","sourcePath":"components/feedback/Dialog.jsx"},{"name":"Tooltip","sourcePath":"components/feedback/Tooltip.jsx"},{"name":"Button","sourcePath":"components/forms/Button.jsx"},{"name":"Checkbox","sourcePath":"components/forms/Checkbox.jsx"},{"name":"IconButton","sourcePath":"components/forms/IconButton.jsx"},{"name":"Input","sourcePath":"components/forms/Input.jsx"},{"name":"Radio","sourcePath":"components/forms/Radio.jsx"},{"name":"Select","sourcePath":"components/forms/Select.jsx"},{"name":"Switch","sourcePath":"components/forms/Switch.jsx"},{"name":"Textarea","sourcePath":"components/forms/Textarea.jsx"},{"name":"Breadcrumb","sourcePath":"components/navigation/Breadcrumb.jsx"},{"name":"Tabs","sourcePath":"components/navigation/Tabs.jsx"}],"sourceHashes":{"components/data-display/Avatar.jsx":"c5c0b7104fe5","components/data-display/Badge.jsx":"2746c6eba36f","components/data-display/Card.jsx":"bce2ce8386eb","components/data-display/Stat.jsx":"677a255cc547","components/data-display/Tag.jsx":"c131d59f5653","components/feedback/Accordion.jsx":"c3d36e0c5dea","components/feedback/Dialog.jsx":"0c7657139edc","components/feedback/Tooltip.jsx":"62fa1c73fc42","components/forms/Button.jsx":"b19b87a9d06b","components/forms/Checkbox.jsx":"3d17f26333a3","components/forms/IconButton.jsx":"bfdca82cf923","components/forms/Input.jsx":"3259ab746555","components/forms/Radio.jsx":"4ec4c556de4d","components/forms/Select.jsx":"f662d1790fd7","components/forms/Switch.jsx":"a85593e69dcc","components/forms/Textarea.jsx":"a17c97d69381","components/navigation/Breadcrumb.jsx":"edebd1caa317","components/navigation/Tabs.jsx":"3c81690e2f5d","ui_kits/website/Chrome.jsx":"0a731ab7dc34","ui_kits/website/Contact.jsx":"ef064a3e5da6","ui_kits/website/Home.jsx":"8ae3ccbd74ca","ui_kits/website/Project.jsx":"4692d1ce5197","ui_kits/website/Studio.jsx":"3d4b05ecb7ed","ui_kits/website/Work.jsx":"2a12341b16b9","ui_kits/website/shared.jsx":"f63440799473"},"inlinedExternals":[],"unexposedExports":[]} */

(() => {

const __ds_ns = (window.Studio9DNDesignSystem_7fd16e = window.Studio9DNDesignSystem_7fd16e || {});

const __ds_scope = {};

(__ds_ns.__errors = __ds_ns.__errors || []);

// components/data-display/Avatar.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Avatar — image or initials, forest fallback. Square or round. */
function Avatar({
  src,
  name = "",
  size = 40,
  shape = "circle",
  style = {},
  ...rest
}) {
  const initials = name.split(" ").map(w => w[0]).slice(0, 2).join("").toUpperCase();
  const base = {
    width: size,
    height: size,
    flexShrink: 0,
    borderRadius: shape === "circle" ? "var(--radius-pill)" : "var(--radius-md)",
    background: "var(--color-primary)",
    color: "var(--color-on-primary)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    fontFamily: "var(--font-display)",
    fontWeight: "var(--weight-medium)",
    fontSize: Math.round(size * 0.38),
    overflow: "hidden",
    userSelect: "none",
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), src ? /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: name,
    style: {
      width: "100%",
      height: "100%",
      objectFit: "cover"
    }
  }) : initials || "·");
}
Object.assign(__ds_scope, { Avatar });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Avatar.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Badge.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Small status/label badge. Subdued, flat, tracked. */
function Badge({
  children,
  tone = "neutral",
  style = {},
  ...rest
}) {
  const tones = {
    neutral: {
      background: "var(--color-bg-sunken)",
      color: "var(--color-text-muted)"
    },
    forest: {
      background: "var(--color-primary-soft)",
      color: "var(--forest-800)"
    },
    solid: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)"
    },
    accent: {
      background: "var(--color-accent-soft)",
      color: "var(--ochre-600)"
    },
    success: {
      background: "#e4ead4",
      color: "var(--color-success)"
    },
    danger: {
      background: "var(--color-danger-soft)",
      color: "var(--color-danger)"
    }
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "5px",
    fontFamily: "var(--font-display)",
    fontSize: "var(--text-2xs)",
    fontWeight: "var(--weight-medium)",
    letterSpacing: "var(--tracking-wide)",
    textTransform: "uppercase",
    lineHeight: 1,
    padding: "4px 9px",
    borderRadius: "var(--radius-sm)",
    ...tones[tone],
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children);
}
Object.assign(__ds_scope, { Badge });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Badge.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Card.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Flat surface card. Depth from surface colour + 1px border, not shadow. */
function Card({
  children,
  variant = "surface",
  interactive = false,
  padding = "var(--space-5)",
  style = {},
  ...rest
}) {
  const variants = {
    surface: {
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)"
    },
    sunken: {
      background: "var(--color-bg-sunken)",
      border: "1px solid transparent"
    },
    outline: {
      background: "transparent",
      border: "1px solid var(--color-border-strong)"
    },
    inverse: {
      background: "var(--color-inverse)",
      border: "1px solid var(--color-inverse)",
      color: "var(--color-text-on-dark)"
    }
  };
  const base = {
    borderRadius: "var(--radius-lg)",
    padding,
    transition: "border-color var(--duration-base) var(--ease-standard), background var(--duration-base) var(--ease-standard)",
    cursor: interactive ? "pointer" : "default",
    ...variants[variant],
    ...style
  };
  const onEnter = e => {
    if (interactive) e.currentTarget.style.borderColor = "var(--color-border-strong)";
  };
  const onLeave = e => {
    if (interactive) e.currentTarget.style.borderColor = variants[variant].border.includes("transparent") ? "transparent" : variant === "outline" ? "var(--color-border-strong)" : "var(--color-border)";
  };
  return /*#__PURE__*/React.createElement("div", _extends({
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), children);
}
Object.assign(__ds_scope, { Card });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Card.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Stat.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Stat — large numeral + label, for facts/metrics. Clash Grotesk display. */
function Stat({
  value,
  label,
  suffix,
  align = "left",
  style = {},
  ...rest
}) {
  return /*#__PURE__*/React.createElement("div", _extends({
    style: {
      textAlign: align,
      ...style
    }
  }, rest), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-2xl)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-tight)",
      lineHeight: 1,
      color: "var(--color-text)"
    }
  }, value, suffix && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "0.5em",
      color: "var(--color-text-muted)",
      marginLeft: 2
    }
  }, suffix)), label && /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: 8,
      fontSize: "var(--text-2xs)",
      fontFamily: "var(--font-display)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "var(--color-text-muted)"
    }
  }, label));
}
Object.assign(__ds_scope, { Stat });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Stat.jsx", error: String((e && e.message) || e) }); }

// components/data-display/Tag.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Tag / chip — filter or category, optionally removable. */
function Tag({
  children,
  active = false,
  onRemove,
  style = {},
  ...rest
}) {
  const base = {
    display: "inline-flex",
    alignItems: "center",
    gap: "7px",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-xs)",
    fontWeight: "var(--weight-medium)",
    lineHeight: 1,
    padding: "6px 12px",
    borderRadius: "var(--radius-pill)",
    cursor: rest.onClick ? "pointer" : "default",
    background: active ? "var(--color-primary)" : "transparent",
    color: active ? "var(--color-on-primary)" : "var(--color-text)",
    border: `1px solid ${active ? "var(--color-primary)" : "var(--color-border-strong)"}`,
    transition: "all var(--duration-fast) var(--ease-standard)",
    ...style
  };
  return /*#__PURE__*/React.createElement("span", _extends({
    style: base
  }, rest), children, onRemove && /*#__PURE__*/React.createElement("button", {
    onClick: e => {
      e.stopPropagation();
      onRemove(e);
    },
    "aria-label": "Remove",
    style: {
      border: "none",
      background: "transparent",
      color: "inherit",
      cursor: "pointer",
      padding: 0,
      lineHeight: 1,
      fontSize: "13px",
      opacity: 0.7
    }
  }, "\xD7"));
}
Object.assign(__ds_scope, { Tag });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/data-display/Tag.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Accordion.jsx
try { (() => {
/** Accordion — divider rows that expand. Calm, no bounce. */
function Accordion({
  items = [],
  allowMultiple = false,
  style = {}
}) {
  const [open, setOpen] = React.useState([]);
  const toggle = i => {
    setOpen(prev => {
      if (prev.includes(i)) return prev.filter(x => x !== i);
      return allowMultiple ? [...prev, i] : [i];
    });
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      borderTop: "1px solid var(--color-border)",
      ...style
    }
  }, items.map((it, i) => {
    const isOpen = open.includes(i);
    return /*#__PURE__*/React.createElement("div", {
      key: i,
      style: {
        borderBottom: "1px solid var(--color-border)"
      }
    }, /*#__PURE__*/React.createElement("button", {
      onClick: () => toggle(i),
      "aria-expanded": isOpen,
      style: {
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: "var(--space-4)",
        padding: "var(--space-4) 0",
        border: "none",
        background: "transparent",
        cursor: "pointer",
        textAlign: "left",
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-md)",
        fontWeight: "var(--weight-medium)",
        color: "var(--color-text)"
      }
    }, it.title, /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      style: {
        fontSize: 18,
        color: "var(--color-text-muted)",
        transition: "transform var(--duration-base) var(--ease-standard)",
        transform: isOpen ? "rotate(45deg)" : "none"
      }
    }, "+")), isOpen && /*#__PURE__*/React.createElement("div", {
      style: {
        padding: "0 0 var(--space-5)",
        color: "var(--color-text-muted)",
        fontSize: "var(--text-sm)",
        maxWidth: "var(--text-measure)"
      }
    }, it.content));
  }));
}
Object.assign(__ds_scope, { Accordion });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Accordion.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Dialog.jsx
try { (() => {
/** Modal dialog — centred, single soft shadow (the brand's one shadow use). */
function Dialog({
  open,
  onClose,
  title,
  children,
  footer,
  width = 480
}) {
  React.useEffect(() => {
    const onKey = e => {
      if (e.key === "Escape") onClose && onClose();
    };
    if (open) document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open, onClose]);
  if (!open) return null;
  return /*#__PURE__*/React.createElement("div", {
    onClick: onClose,
    style: {
      position: "fixed",
      inset: 0,
      zIndex: 1000,
      background: "rgba(28,29,24,0.42)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      padding: "var(--space-5)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    role: "dialog",
    "aria-modal": "true",
    onClick: e => e.stopPropagation(),
    style: {
      width: "100%",
      maxWidth: width,
      background: "var(--color-surface)",
      borderRadius: "var(--radius-lg)",
      boxShadow: "var(--shadow-lg)",
      border: "1px solid var(--color-border)",
      overflow: "hidden"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-start",
      justifyContent: "space-between",
      gap: "var(--space-4)",
      padding: "var(--space-5) var(--space-5) var(--space-3)"
    }
  }, title && /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: 0,
      fontSize: "var(--text-md)"
    }
  }, title), /*#__PURE__*/React.createElement("button", {
    onClick: onClose,
    "aria-label": "Close",
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      fontSize: 20,
      lineHeight: 1,
      color: "var(--color-text-muted)",
      padding: 0
    }
  }, "\xD7")), /*#__PURE__*/React.createElement("div", {
    style: {
      padding: "0 var(--space-5) var(--space-5)",
      color: "var(--color-text-muted)",
      fontSize: "var(--text-sm)"
    }
  }, children), footer && /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      gap: "var(--space-3)",
      padding: "var(--space-4) var(--space-5)",
      borderTop: "1px solid var(--color-border)",
      background: "var(--color-bg-sunken)"
    }
  }, footer)));
}
Object.assign(__ds_scope, { Dialog });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Dialog.jsx", error: String((e && e.message) || e) }); }

// components/feedback/Tooltip.jsx
try { (() => {
/** Tooltip — dark forest bubble on hover/focus. */
function Tooltip({
  label,
  children,
  placement = "top"
}) {
  const [show, setShow] = React.useState(false);
  const pos = {
    top: {
      bottom: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    bottom: {
      top: "calc(100% + 8px)",
      left: "50%",
      transform: "translateX(-50%)"
    },
    left: {
      right: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    },
    right: {
      left: "calc(100% + 8px)",
      top: "50%",
      transform: "translateY(-50%)"
    }
  };
  return /*#__PURE__*/React.createElement("span", {
    style: {
      position: "relative",
      display: "inline-flex"
    },
    onMouseEnter: () => setShow(true),
    onMouseLeave: () => setShow(false),
    onFocus: () => setShow(true),
    onBlur: () => setShow(false)
  }, children, show && /*#__PURE__*/React.createElement("span", {
    role: "tooltip",
    style: {
      position: "absolute",
      zIndex: 900,
      whiteSpace: "nowrap",
      background: "var(--color-inverse-2)",
      color: "var(--color-text-on-dark)",
      fontFamily: "var(--font-sans)",
      fontSize: "var(--text-2xs)",
      padding: "5px 9px",
      borderRadius: "var(--radius-sm)",
      pointerEvents: "none",
      boxShadow: "var(--shadow-md)",
      ...pos[placement]
    }
  }, label));
}
Object.assign(__ds_scope, { Tooltip });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/feedback/Tooltip.jsx", error: String((e && e.message) || e) }); }

// components/forms/Button.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/**
 * Studio9DN Button — flat, architectural. Forest fill is the primary action.
 * Depth comes from colour, not shadow; hover darkens, press darkens more.
 */
function Button({
  children,
  variant = "primary",
  size = "md",
  type = "button",
  disabled = false,
  fullWidth = false,
  leadingIcon = null,
  trailingIcon = null,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: {
      padding: "7px 14px",
      fontSize: "var(--text-xs)",
      gap: "6px"
    },
    md: {
      padding: "10px 20px",
      fontSize: "var(--text-sm)",
      gap: "8px"
    },
    lg: {
      padding: "13px 26px",
      fontSize: "var(--text-base)",
      gap: "10px"
    }
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      border: "1px solid var(--color-primary)"
    },
    secondary: {
      background: "transparent",
      color: "var(--color-text)",
      border: "1px solid var(--color-border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-text)",
      border: "1px solid transparent"
    },
    inverse: {
      background: "var(--color-on-primary)",
      color: "var(--color-primary)",
      border: "1px solid var(--color-on-primary)"
    }
  };
  const base = {
    display: fullWidth ? "flex" : "inline-flex",
    width: fullWidth ? "100%" : "auto",
    alignItems: "center",
    justifyContent: "center",
    gap: sizes[size].gap,
    fontFamily: "var(--font-display)",
    fontWeight: "var(--weight-medium)",
    letterSpacing: "var(--tracking-wide)",
    lineHeight: 1,
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--duration-fast) var(--ease-standard), color var(--duration-fast) var(--ease-standard)",
    padding: sizes[size].padding,
    fontSize: sizes[size].fontSize,
    ...variants[variant],
    ...style
  };
  const hoverBg = {
    primary: "var(--color-primary-hover)",
    secondary: "var(--color-bg-sunken)",
    ghost: "var(--color-bg-sunken)",
    inverse: "var(--color-primary-soft)"
  };
  const onEnter = e => {
    if (!disabled) e.currentTarget.style.background = hoverBg[variant];
  };
  const onLeave = e => {
    if (!disabled) e.currentTarget.style.background = variants[variant].background;
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    type: type,
    disabled: disabled,
    style: base,
    onMouseEnter: onEnter,
    onMouseLeave: onLeave
  }, rest), leadingIcon, children, trailingIcon);
}
Object.assign(__ds_scope, { Button });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Button.jsx", error: String((e && e.message) || e) }); }

// components/forms/Checkbox.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Checkbox with square, forest-filled checked state. */
function Checkbox({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style = {},
  ...rest
}) {
  const reactId = React.useId();
  const cbId = id || reactId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const box = {
    width: 18,
    height: 18,
    flexShrink: 0,
    borderRadius: "var(--radius-xs)",
    border: `1.5px solid ${on ? "var(--color-primary)" : "var(--color-border-strong)"}`,
    background: on ? "var(--color-primary)" : "var(--color-surface)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    color: "var(--color-on-primary)",
    transition: "all var(--duration-fast) var(--ease-standard)"
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: cbId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontSize: "var(--text-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    id: cbId,
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: box
  }, on && /*#__PURE__*/React.createElement("svg", {
    width: "11",
    height: "11",
    viewBox: "0 0 12 12",
    fill: "none"
  }, /*#__PURE__*/React.createElement("path", {
    d: "M2.5 6.2L4.8 8.5L9.5 3.5",
    stroke: "currentColor",
    strokeWidth: "1.8",
    strokeLinecap: "round",
    strokeLinejoin: "round"
  }))), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Checkbox });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Checkbox.jsx", error: String((e && e.message) || e) }); }

// components/forms/IconButton.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Square icon-only button. Same visual language as Button. */
function IconButton({
  children,
  variant = "ghost",
  size = "md",
  disabled = false,
  label,
  style = {},
  ...rest
}) {
  const dims = {
    sm: 30,
    md: 38,
    lg: 46
  };
  const variants = {
    primary: {
      background: "var(--color-primary)",
      color: "var(--color-on-primary)",
      border: "1px solid var(--color-primary)"
    },
    secondary: {
      background: "transparent",
      color: "var(--color-text)",
      border: "1px solid var(--color-border-strong)"
    },
    ghost: {
      background: "transparent",
      color: "var(--color-text)",
      border: "1px solid transparent"
    }
  };
  const hoverBg = {
    primary: "var(--color-primary-hover)",
    secondary: "var(--color-bg-sunken)",
    ghost: "var(--color-bg-sunken)"
  };
  const base = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    width: dims[size],
    height: dims[size],
    borderRadius: "var(--radius-md)",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.45 : 1,
    transition: "background var(--duration-fast) var(--ease-standard)",
    ...variants[variant],
    ...style
  };
  return /*#__PURE__*/React.createElement("button", _extends({
    "aria-label": label,
    disabled: disabled,
    style: base,
    onMouseEnter: e => {
      if (!disabled) e.currentTarget.style.background = hoverBg[variant];
    },
    onMouseLeave: e => {
      if (!disabled) e.currentTarget.style.background = variants[variant].background;
    }
  }, rest), children);
}
Object.assign(__ds_scope, { IconButton });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/IconButton.jsx", error: String((e && e.message) || e) }); }

// components/forms/Input.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Text input with brand label + helper. 1px border, focus ring, no glow. */
function Input({
  label,
  helper,
  error,
  id,
  leadingIcon = null,
  size = "md",
  style = {},
  ...rest
}) {
  const reactId = React.useId();
  const inputId = id || reactId;
  const [focused, setFocused] = React.useState(false);
  const pad = {
    sm: "8px 12px",
    md: "10px 14px",
    lg: "13px 16px"
  };
  const fs = {
    sm: "var(--text-xs)",
    md: "var(--text-sm)",
    lg: "var(--text-base)"
  };
  const wrap = {
    display: "flex",
    alignItems: "center",
    gap: "8px",
    background: "var(--color-surface)",
    border: `1px solid ${error ? "var(--color-danger)" : focused ? "var(--color-primary)" : "var(--color-border-strong)"}`,
    borderRadius: "var(--radius-md)",
    padding: pad[size],
    boxShadow: focused && !error ? "var(--shadow-focus)" : "none",
    transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
  };
  const input = {
    flex: 1,
    border: "none",
    outline: "none",
    background: "transparent",
    font: "inherit",
    fontFamily: "var(--font-sans)",
    fontSize: fs[size],
    color: "var(--color-text)",
    minWidth: 0
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: inputId,
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-wide)",
      color: "var(--color-text)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: wrap
  }, leadingIcon, /*#__PURE__*/React.createElement("input", _extends({
    id: inputId,
    style: input,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest))), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--color-danger)" : "var(--color-text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Input });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Input.jsx", error: String((e && e.message) || e) }); }

// components/forms/Radio.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Radio button — round, forest dot when selected. */
function Radio({
  label,
  checked,
  onChange,
  name,
  value,
  disabled,
  id,
  style = {},
  ...rest
}) {
  const reactId = React.useId();
  const rId = id || reactId;
  const ring = {
    width: 18,
    height: 18,
    flexShrink: 0,
    borderRadius: "var(--radius-pill)",
    border: `1.5px solid ${checked ? "var(--color-primary)" : "var(--color-border-strong)"}`,
    background: "var(--color-surface)",
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    transition: "all var(--duration-fast) var(--ease-standard)"
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: rId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontSize: "var(--text-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "radio",
    id: rId,
    name: name,
    value: value,
    checked: checked,
    onChange: onChange,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: ring
  }, checked && /*#__PURE__*/React.createElement("span", {
    style: {
      width: 8,
      height: 8,
      borderRadius: "var(--radius-pill)",
      background: "var(--color-primary)"
    }
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Radio });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Radio.jsx", error: String((e && e.message) || e) }); }

// components/forms/Select.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Native select styled to brand, with chevron. */
function Select({
  label,
  helper,
  error,
  id,
  children,
  size = "md",
  style = {},
  ...rest
}) {
  const reactId = React.useId();
  const selId = id || reactId;
  const [focused, setFocused] = React.useState(false);
  const pad = {
    sm: "8px 34px 8px 12px",
    md: "10px 38px 10px 14px",
    lg: "13px 42px 13px 16px"
  };
  const sel = {
    appearance: "none",
    WebkitAppearance: "none",
    width: "100%",
    font: "inherit",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    color: "var(--color-text)",
    background: "var(--color-surface)",
    border: `1px solid ${error ? "var(--color-danger)" : focused ? "var(--color-primary)" : "var(--color-border-strong)"}`,
    borderRadius: "var(--radius-md)",
    padding: pad[size],
    outline: "none",
    cursor: "pointer",
    boxShadow: focused && !error ? "var(--shadow-focus)" : "none",
    transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: selId,
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-wide)"
    }
  }, label), /*#__PURE__*/React.createElement("div", {
    style: {
      position: "relative"
    }
  }, /*#__PURE__*/React.createElement("select", _extends({
    id: selId,
    style: sel,
    onFocus: () => setFocused(true),
    onBlur: () => setFocused(false)
  }, rest), children), /*#__PURE__*/React.createElement("span", {
    "aria-hidden": true,
    style: {
      position: "absolute",
      right: 14,
      top: "50%",
      transform: "translateY(-50%)",
      pointerEvents: "none",
      color: "var(--color-text-muted)",
      fontSize: "11px"
    }
  }, "\u25BC")), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--color-danger)" : "var(--color-text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Select });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Select.jsx", error: String((e && e.message) || e) }); }

// components/forms/Switch.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Toggle switch — forest track when on. Calm slide, no bounce. */
function Switch({
  label,
  checked,
  defaultChecked,
  onChange,
  disabled,
  id,
  style = {},
  ...rest
}) {
  const reactId = React.useId();
  const swId = id || reactId;
  const isControlled = checked !== undefined;
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const on = isControlled ? checked : internal;
  const toggle = e => {
    if (!isControlled) setInternal(e.target.checked);
    onChange && onChange(e);
  };
  const track = {
    width: 38,
    height: 22,
    borderRadius: "var(--radius-pill)",
    flexShrink: 0,
    background: on ? "var(--color-primary)" : "var(--color-border-strong)",
    position: "relative",
    transition: "background var(--duration-base) var(--ease-standard)"
  };
  const knob = {
    position: "absolute",
    top: 2,
    left: on ? 18 : 2,
    width: 18,
    height: 18,
    borderRadius: "var(--radius-pill)",
    background: "var(--paper)",
    transition: "left var(--duration-base) var(--ease-out)",
    boxShadow: "var(--shadow-sm)"
  };
  return /*#__PURE__*/React.createElement("label", {
    htmlFor: swId,
    style: {
      display: "inline-flex",
      alignItems: "center",
      gap: "10px",
      cursor: disabled ? "not-allowed" : "pointer",
      opacity: disabled ? 0.5 : 1,
      fontSize: "var(--text-sm)",
      ...style
    }
  }, /*#__PURE__*/React.createElement("input", _extends({
    type: "checkbox",
    role: "switch",
    id: swId,
    checked: on,
    onChange: toggle,
    disabled: disabled,
    style: {
      position: "absolute",
      opacity: 0,
      width: 0,
      height: 0
    }
  }, rest)), /*#__PURE__*/React.createElement("span", {
    style: track
  }, /*#__PURE__*/React.createElement("span", {
    style: knob
  })), label && /*#__PURE__*/React.createElement("span", null, label));
}
Object.assign(__ds_scope, { Switch });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Switch.jsx", error: String((e && e.message) || e) }); }

// components/forms/Textarea.jsx
try { (() => {
function _extends() { return _extends = Object.assign ? Object.assign.bind() : function (n) { for (var e = 1; e < arguments.length; e++) { var t = arguments[e]; for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]); } return n; }, _extends.apply(null, arguments); }
/** Multi-line text area, matches Input styling. */
function Textarea({
  label,
  helper,
  error,
  id,
  rows = 4,
  style = {},
  ...rest
}) {
  const reactId = React.useId();
  const taId = id || reactId;
  const [focused, setFocused] = React.useState(false);
  const ta = {
    width: "100%",
    resize: "vertical",
    font: "inherit",
    fontFamily: "var(--font-sans)",
    fontSize: "var(--text-sm)",
    color: "var(--color-text)",
    background: "var(--color-surface)",
    border: `1px solid ${error ? "var(--color-danger)" : focused ? "var(--color-primary)" : "var(--color-border-strong)"}`,
    borderRadius: "var(--radius-md)",
    padding: "10px 14px",
    outline: "none",
    boxShadow: focused && !error ? "var(--shadow-focus)" : "none",
    transition: "border-color var(--duration-fast) var(--ease-standard), box-shadow var(--duration-fast) var(--ease-standard)",
    lineHeight: "var(--leading-normal)"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "6px",
      ...style
    }
  }, label && /*#__PURE__*/React.createElement("label", {
    htmlFor: taId,
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xs)",
      fontWeight: "var(--weight-medium)",
      letterSpacing: "var(--tracking-wide)"
    }
  }, label), /*#__PURE__*/React.createElement("textarea", _extends({
    id: taId,
    rows: rows,
    style: ta,
    onFocus: e => {
      setFocused(true);
      rest.onFocus && rest.onFocus(e);
    },
    onBlur: e => {
      setFocused(false);
      rest.onBlur && rest.onBlur(e);
    }
  }, rest)), (helper || error) && /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: error ? "var(--color-danger)" : "var(--color-text-muted)"
    }
  }, error || helper));
}
Object.assign(__ds_scope, { Textarea });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/forms/Textarea.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Breadcrumb.jsx
try { (() => {
/** Breadcrumb trail — slash separators, muted until the current page. */
function Breadcrumb({
  items = [],
  style = {}
}) {
  return /*#__PURE__*/React.createElement("nav", {
    "aria-label": "Breadcrumb",
    style: {
      display: "flex",
      alignItems: "center",
      flexWrap: "wrap",
      gap: "8px",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-xs)",
      letterSpacing: "var(--tracking-wide)",
      ...style
    }
  }, items.map((it, i) => {
    const last = i === items.length - 1;
    return /*#__PURE__*/React.createElement(React.Fragment, {
      key: i
    }, it.href && !last ? /*#__PURE__*/React.createElement("a", {
      href: it.href,
      style: {
        color: "var(--color-text-muted)",
        textDecoration: "none"
      }
    }, it.label) : /*#__PURE__*/React.createElement("span", {
      style: {
        color: last ? "var(--color-text)" : "var(--color-text-muted)"
      }
    }, it.label), !last && /*#__PURE__*/React.createElement("span", {
      "aria-hidden": true,
      style: {
        color: "var(--color-border-strong)"
      }
    }, "/"));
  }));
}
Object.assign(__ds_scope, { Breadcrumb });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Breadcrumb.jsx", error: String((e && e.message) || e) }); }

// components/navigation/Tabs.jsx
try { (() => {
/** Underline tabs — accent underline on active, no pill backgrounds (brand). */
function Tabs({
  tabs = [],
  value,
  defaultValue,
  onChange,
  style = {}
}) {
  const isControlled = value !== undefined;
  const [internal, setInternal] = React.useState(defaultValue ?? (tabs[0] && tabs[0].id));
  const active = isControlled ? value : internal;
  const select = id => {
    if (!isControlled) setInternal(id);
    onChange && onChange(id);
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--color-border)",
      ...style
    }
  }, tabs.map(t => {
    const on = t.id === active;
    return /*#__PURE__*/React.createElement("button", {
      key: t.id,
      onClick: () => select(t.id),
      style: {
        position: "relative",
        border: "none",
        background: "transparent",
        padding: "0 0 12px",
        cursor: "pointer",
        fontFamily: "var(--font-display)",
        fontSize: "var(--text-sm)",
        fontWeight: on ? "var(--weight-medium)" : "var(--weight-regular)",
        letterSpacing: "var(--tracking-wide)",
        color: on ? "var(--color-text)" : "var(--color-text-muted)",
        transition: "color var(--duration-fast) var(--ease-standard)"
      }
    }, t.label, /*#__PURE__*/React.createElement("span", {
      style: {
        position: "absolute",
        left: 0,
        right: 0,
        bottom: -1,
        height: 2,
        background: on ? "var(--color-accent)" : "transparent",
        borderRadius: "2px 2px 0 0"
      }
    }));
  }));
}
Object.assign(__ds_scope, { Tabs });
})(); } catch (e) { __ds_ns.__errors.push({ path: "components/navigation/Tabs.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Chrome.jsx
try { (() => {
/* Studio9DN website — header & footer chrome. */

function SiteHeader({
  route,
  go
}) {
  const {
    NAV,
    Wordmark
  } = window;
  const {
    Button
  } = window.Studio9DNDesignSystem_7fd16e;
  return /*#__PURE__*/React.createElement("header", {
    style: {
      position: "sticky",
      top: 0,
      zIndex: 50,
      background: "rgba(245,243,236,0.86)",
      backdropFilter: "blur(10px)",
      borderBottom: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "0 var(--space-6)",
      height: 68,
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("button", {
    onClick: () => go("home"),
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: 0,
      display: "flex",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    height: 24
  })), /*#__PURE__*/React.createElement("nav", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: "var(--space-6)"
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      border: "none",
      background: "transparent",
      cursor: "pointer",
      padding: "4px 0",
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-sm)",
      letterSpacing: "var(--tracking-wide)",
      fontWeight: route === n.id ? "var(--weight-medium)" : "var(--weight-regular)",
      color: route === n.id ? "var(--color-text)" : "var(--color-text-muted)",
      borderBottom: route === n.id ? "2px solid var(--color-accent)" : "2px solid transparent"
    }
  }, n.label)), /*#__PURE__*/React.createElement(Button, {
    size: "sm",
    onClick: () => go("contact")
  }, "Start a project"))));
}
function SiteFooter({
  go
}) {
  const {
    Wordmark,
    NAV
  } = window;
  return /*#__PURE__*/React.createElement("footer", {
    style: {
      background: "var(--color-inverse)",
      color: "var(--color-text-on-dark)",
      marginTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: "var(--container-max)",
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "space-between",
      flexWrap: "wrap",
      gap: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: 320
    }
  }, /*#__PURE__*/React.createElement(Wordmark, {
    color: "white",
    height: 26
  }), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-4)",
      color: "var(--color-text-on-dark-muted)",
      fontSize: "var(--text-sm)"
    }
  }, "An independent multidisciplinary design practice rooted in tropical architecture. 9 Degrees North.")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-8)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--forest-300)",
      marginBottom: 12
    }
  }, "Pages"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8
    }
  }, NAV.map(n => /*#__PURE__*/React.createElement("button", {
    key: n.id,
    onClick: () => go(n.id),
    style: {
      border: "none",
      background: "transparent",
      color: "var(--color-text-on-dark)",
      textAlign: "left",
      cursor: "pointer",
      padding: 0,
      fontSize: "var(--text-sm)"
    }
  }, n.label)))), /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--forest-300)",
      marginBottom: 12
    }
  }, "Studio"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      fontSize: "var(--text-sm)",
      color: "var(--color-text-on-dark-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "12 Bourdillon Road"), /*#__PURE__*/React.createElement("span", null, "Ikoyi, Lagos"), /*#__PURE__*/React.createElement("span", null, "hello@studio9dn.com"))))), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-7)",
      paddingTop: "var(--space-4)",
      borderTop: "1px solid var(--color-border-on-dark)",
      display: "flex",
      justifyContent: "space-between",
      fontSize: "var(--text-xs)",
      color: "var(--color-text-on-dark-muted)"
    }
  }, /*#__PURE__*/React.createElement("span", null, "\xA9 2026 Studio9DN\xAE"), /*#__PURE__*/React.createElement("span", null, "Lagos \xB7 9\xB0N"))));
}
Object.assign(window, {
  SiteHeader,
  SiteFooter
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Chrome.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Contact.jsx
try { (() => {
/* Studio9DN website — Contact view with a brief form + dialog confirm. */

function Contact() {
  const {
    Input,
    Textarea,
    Select,
    Button,
    Checkbox,
    Dialog
  } = window.Studio9DNDesignSystem_7fd16e;
  const [sent, setSent] = React.useState(false);
  const W = "var(--container-max)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Start a project"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(40px,5vw,64px)",
      margin: "0 0 var(--space-5)",
      maxWidth: "12ch"
    }
  }, "Let's build something considered."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--color-text-muted)",
      maxWidth: "44ch"
    }
  }, "Tell us about your site, programme and timeline. We reply to every enquiry within two working days."), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-7)",
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, [["Studio", "12 Bourdillon Road, Ikoyi, Lagos"], ["Email", "hello@studio9dn.com"], ["Phone", "+234 800 000 9000"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 4
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-base)"
    }
  }, v))))), /*#__PURE__*/React.createElement("div", {
    style: {
      background: "var(--color-surface)",
      border: "1px solid var(--color-border)",
      borderRadius: "var(--radius-lg)",
      padding: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      flexDirection: "column",
      gap: "var(--space-4)"
    }
  }, /*#__PURE__*/React.createElement(Input, {
    label: "Full name",
    placeholder: "Ada Okafor"
  }), /*#__PURE__*/React.createElement(Input, {
    label: "Email",
    type: "email",
    placeholder: "ada@email.com"
  }), /*#__PURE__*/React.createElement(Select, {
    label: "Project type"
  }, /*#__PURE__*/React.createElement("option", null, "Residential"), /*#__PURE__*/React.createElement("option", null, "Commercial"), /*#__PURE__*/React.createElement("option", null, "Institutional"), /*#__PURE__*/React.createElement("option", null, "Other")), /*#__PURE__*/React.createElement(Textarea, {
    label: "About your project",
    rows: 4,
    placeholder: "Site, programme, timeline, budget range\u2026"
  }), /*#__PURE__*/React.createElement(Checkbox, {
    label: "Subscribe to the studio journal"
  }), /*#__PURE__*/React.createElement(Button, {
    fullWidth: true,
    onClick: () => setSent(true)
  }, "Send brief")))), /*#__PURE__*/React.createElement(Dialog, {
    open: sent,
    onClose: () => setSent(false),
    title: "Thank you \u2014 brief received",
    footer: /*#__PURE__*/React.createElement(Button, {
      onClick: () => setSent(false)
    }, "Close")
  }, "We've received your enquiry and will reply within two working days. In the meantime, feel free to explore our recent work."));
}
Object.assign(window, {
  Contact
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Contact.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Home.jsx
try { (() => {
/* Studio9DN website — Home view. */

function Home({
  go,
  openProject
}) {
  const {
    Img,
    PROJECTS
  } = window;
  const {
    Button,
    Stat,
    Tag
  } = window.Studio9DNDesignSystem_7fd16e;
  const featured = PROJECTS.slice(0, 3);
  const W = "var(--container-max)";
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "var(--space-9) var(--space-6) var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "Lagos, Nigeria \xB7 9\xB0 North"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(44px, 7vw, 84px)",
      lineHeight: 0.98,
      margin: 0,
      maxWidth: "14ch"
    }
  }, "Tropical architecture,", /*#__PURE__*/React.createElement("br", null), "designed to perform."), /*#__PURE__*/React.createElement("p", {
    style: {
      marginTop: "var(--space-5)",
      fontSize: "var(--text-md)",
      color: "var(--color-text-muted)",
      maxWidth: "52ch"
    }
  }, "We are an independent multidisciplinary design practice committed to holistic building performance and sustainable design excellence \u2014 for real estate firms, institutions and private clients."), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      gap: "var(--space-3)",
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Button, {
    onClick: () => go("work")
  }, "View our work"), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go("studio")
  }, "About the studio"))), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "0 var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    ratio: "21/9",
    tone: "forest",
    label: "Featured \xB7 \xCCd\xFAnn\xFA Residence, Ikoyi"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "repeat(4, 1fr)",
      gap: "var(--space-6)",
      borderBottom: "1px solid var(--color-border)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "120",
    suffix: "+",
    label: "Projects delivered"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "14",
    label: "Years in practice"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "9\xB0N",
    label: "Our latitude"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "100%",
    label: "Passive-first design"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      marginBottom: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Selected work"), /*#__PURE__*/React.createElement("h2", {
    style: {
      fontSize: "var(--text-xl)",
      margin: 0
    }
  }, "Recent projects")), /*#__PURE__*/React.createElement(Button, {
    variant: "ghost",
    onClick: () => go("work"),
    trailingIcon: /*#__PURE__*/React.createElement("span", null, "\u2192")
  }, "All work")), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-5)"
    }
  }, featured.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => openProject(p.id),
    style: {
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    ratio: "4/3",
    tone: p.tone,
    label: p.place
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)",
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, null, p.type), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--color-text-subtle)"
    }
  }, p.year)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "8px 0 4px",
      fontSize: "var(--text-md)"
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--color-text-muted)"
    }
  }, p.blurb))))), /*#__PURE__*/React.createElement("section", {
    style: {
      background: "var(--color-inverse)",
      color: "var(--color-text-on-dark)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "var(--space-9) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-8)",
      alignItems: "center"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      color: "var(--forest-300)",
      marginBottom: "var(--space-4)"
    }
  }, "Our ethos"), /*#__PURE__*/React.createElement("p", {
    className: "serif",
    style: {
      fontSize: "clamp(26px,3.4vw,40px)",
      lineHeight: 1.18,
      color: "var(--color-text-on-dark)",
      margin: 0,
      fontStyle: "italic",
      fontFamily: "var(--font-serif)",
      fontWeight: 300
    }
  }, "We never compromise on quality, performance and sustainability.")), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--color-text-on-dark-muted)",
      margin: 0
    }
  }, "Architecture, to us, marks clusters of ideals keyed to coordinates. Every building we make is tuned to its place \u2014 to the heat, the light and the rain of nine degrees north of the equator."))));
}
Object.assign(window, {
  Home
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Home.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Project.jsx
try { (() => {
/* Studio9DN website — Project detail. */

function Project({
  id,
  go,
  openProject
}) {
  const {
    Img,
    PROJECTS
  } = window;
  const {
    Breadcrumb,
    Badge,
    Button,
    Tag
  } = window.Studio9DNDesignSystem_7fd16e;
  const p = PROJECTS.find(x => x.id === id) || PROJECTS[0];
  const others = PROJECTS.filter(x => x.id !== p.id).slice(0, 3);
  const W = "var(--container-max)";
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "var(--space-6) var(--space-6) 0"
    }
  }, /*#__PURE__*/React.createElement(Breadcrumb, {
    items: [{
      label: "Work",
      href: "#"
    }, {
      label: p.type,
      href: "#"
    }, {
      label: p.name
    }],
    style: {
      marginBottom: "var(--space-6)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "flex-end",
      justifyContent: "space-between",
      gap: "var(--space-5)",
      flexWrap: "wrap"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(40px,5.5vw,72px)",
      margin: "0 0 var(--space-3)"
    }
  }, p.name), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 10
    }
  }, /*#__PURE__*/React.createElement(Tag, null, p.type), /*#__PURE__*/React.createElement(Badge, {
    tone: p.status === "Completed" ? "forest" : "accent"
  }, p.status), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-sm)",
      color: "var(--color-text-muted)"
    }
  }, p.place, " \xB7 ", p.year))), /*#__PURE__*/React.createElement(Button, {
    variant: "secondary",
    onClick: () => go("contact")
  }, "Enquire about a similar project")), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    ratio: "16/9",
    tone: p.tone,
    label: p.name
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1.6fr 1fr",
      gap: "var(--space-8)",
      marginTop: "var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("p", {
    className: "serif",
    style: {
      fontFamily: "var(--font-serif)",
      fontStyle: "italic",
      fontWeight: 300,
      fontSize: "var(--text-lg)",
      lineHeight: 1.4,
      color: "var(--color-text)",
      marginTop: 0
    }
  }, p.blurb), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-text-muted)",
      fontSize: "var(--text-base)",
      lineHeight: 1.65
    }
  }, "The brief called for a building that could stay cool without leaning on mechanical air conditioning. Our response is passive-first: deep shade, generous cross-ventilation, and a material palette of laterite, timber and clay tile that ages gracefully in the humid coastal climate."), /*#__PURE__*/React.createElement("p", {
    style: {
      color: "var(--color-text-muted)",
      fontSize: "var(--text-base)",
      lineHeight: 1.65
    }
  }, "Daylight is modelled room by room so that interiors stay bright but never harsh, and rainwater is harvested from the roof to irrigate the planted courtyards through the dry season.")), /*#__PURE__*/React.createElement("aside", null, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      rowGap: "var(--space-5)",
      columnGap: "var(--space-4)",
      padding: "var(--space-5)",
      background: "var(--color-bg-sunken)",
      borderRadius: "var(--radius-lg)"
    }
  }, [["Location", p.place], ["Year", p.year], ["Area", p.area], ["Type", p.type], ["Status", p.status], ["Role", "Architecture"]].map(([k, v]) => /*#__PURE__*/React.createElement("div", {
    key: k
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 4
    }
  }, k), /*#__PURE__*/React.createElement("div", {
    style: {
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-sm)",
      fontWeight: 500
    }
  }, v)))))), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "1fr 1fr",
      gap: "var(--space-5)",
      marginTop: "var(--space-7)"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    ratio: "4/3",
    tone: "stone",
    label: "Interior"
  }), /*#__PURE__*/React.createElement(Img, {
    ratio: "4/3",
    tone: "light",
    label: "Detail"
  })), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-9)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "More work"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-5)"
    }
  }, others.map(o => /*#__PURE__*/React.createElement("button", {
    key: o.id,
    onClick: () => openProject(o.id),
    style: {
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    ratio: "4/3",
    tone: o.tone,
    label: o.place
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "10px 0 2px",
      fontSize: "var(--text-sm)"
    }
  }, o.name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--color-text-muted)"
    }
  }, o.type, " \xB7 ", o.year))))));
}
Object.assign(window, {
  Project
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Project.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Studio.jsx
try { (() => {
/* Studio9DN website — Studio (about) view. */

function Studio() {
  const {
    Img
  } = window;
  const {
    Stat,
    Accordion
  } = window.Studio9DNDesignSystem_7fd16e;
  const W = "var(--container-max)";
  const team = ["Adé Ogunyemi", "Ada Okafor", "Tunde Bello", "Ngozi Eze", "Femi Adesina", "Zainab Yusuf"];
  return /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 8
    }
  }, "The studio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(40px,5.5vw,72px)",
      margin: "0 0 var(--space-5)",
      maxWidth: "16ch"
    }
  }, "Confident, creative, detail-oriented."), /*#__PURE__*/React.createElement("p", {
    style: {
      fontSize: "var(--text-md)",
      color: "var(--color-text-muted)",
      maxWidth: "60ch"
    }
  }, "The name Studio9DN pays homage to our roots. 9DN abridges ", /*#__PURE__*/React.createElement("em", null, "9 Degrees North"), " \u2014 a line of latitude that runs through the birthplace of the practice and marks where the world turns tropical. We see architecture as markers for clusters of ideals, keyed to coordinates.")), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "0 var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    ratio: "21/9",
    tone: "ochre",
    label: "Studio \xB7 Ikoyi, Lagos"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6)",
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement(Stat, {
    value: "2012",
    label: "Founded"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "14",
    label: "People"
  }), /*#__PURE__*/React.createElement(Stat, {
    value: "6",
    label: "Cities"
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "0 var(--space-6) var(--space-8)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "What we do"), /*#__PURE__*/React.createElement(Accordion, {
    items: [{
      title: "Tropical architecture",
      content: "Passive-first design tuned to a hot, humid climate — shade, ventilation, daylight and rainwater first; machinery last."
    }, {
      title: "Building performance",
      content: "We model daylight, airflow and energy from the first sketch so performance is designed in, not added on."
    }, {
      title: "Sustainable design",
      content: "Local materials, low embodied carbon, and buildings that age gracefully in the coastal climate."
    }, {
      title: "Interiors & detailing",
      content: "A delicate treatment of fine detail, backed by a resilient outlook — for clients with an acquired taste."
    }]
  })), /*#__PURE__*/React.createElement("section", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "0 var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: "var(--space-5)"
    }
  }, "People"), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3,1fr)",
      gap: "var(--space-6)"
    }
  }, team.map(name => /*#__PURE__*/React.createElement("div", {
    key: name
  }, /*#__PURE__*/React.createElement(Img, {
    ratio: "4/5",
    tone: "stone"
  }), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "12px 0 2px",
      fontSize: "var(--text-sm)"
    }
  }, name), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--color-text-muted)"
    }
  }, "Architect"))))));
}
Object.assign(window, {
  Studio
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Studio.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/Work.jsx
try { (() => {
/* Studio9DN website — Work index with filter tabs. */

function Work({
  openProject
}) {
  const {
    Img,
    PROJECTS
  } = window;
  const {
    Tabs,
    Tag,
    Badge
  } = window.Studio9DNDesignSystem_7fd16e;
  const [filter, setFilter] = React.useState("all");
  const W = "var(--container-max)";
  const tabs = [{
    id: "all",
    label: "All"
  }, {
    id: "Residential",
    label: "Residential"
  }, {
    id: "Commercial",
    label: "Commercial"
  }, {
    id: "Institutional",
    label: "Institutional"
  }];
  const shown = filter === "all" ? PROJECTS : PROJECTS.filter(p => p.type === filter);
  return /*#__PURE__*/React.createElement("div", {
    style: {
      maxWidth: W,
      margin: "0 auto",
      padding: "var(--space-8) var(--space-6)"
    }
  }, /*#__PURE__*/React.createElement("div", {
    className: "eyebrow",
    style: {
      marginBottom: 8
    }
  }, "Portfolio"), /*#__PURE__*/React.createElement("h1", {
    style: {
      fontSize: "clamp(40px,5vw,64px)",
      margin: "0 0 var(--space-6)"
    }
  }, "Work"), /*#__PURE__*/React.createElement(Tabs, {
    tabs: tabs,
    value: filter,
    onChange: setFilter,
    style: {
      marginBottom: "var(--space-7)"
    }
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      display: "grid",
      gridTemplateColumns: "repeat(3, 1fr)",
      gap: "var(--space-6) var(--space-5)"
    }
  }, shown.map(p => /*#__PURE__*/React.createElement("button", {
    key: p.id,
    onClick: () => openProject(p.id),
    style: {
      border: "none",
      background: "transparent",
      padding: 0,
      cursor: "pointer",
      textAlign: "left"
    }
  }, /*#__PURE__*/React.createElement(Img, {
    ratio: "4/3",
    tone: p.tone,
    label: p.place
  }), /*#__PURE__*/React.createElement("div", {
    style: {
      marginTop: "var(--space-3)",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between"
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      display: "flex",
      alignItems: "center",
      gap: 8
    }
  }, /*#__PURE__*/React.createElement(Tag, null, p.type), /*#__PURE__*/React.createElement("span", {
    style: {
      fontSize: "var(--text-xs)",
      color: "var(--color-text-subtle)"
    }
  }, p.year)), /*#__PURE__*/React.createElement(Badge, {
    tone: p.status === "Completed" ? "forest" : "accent"
  }, p.status)), /*#__PURE__*/React.createElement("h3", {
    style: {
      margin: "8px 0 4px",
      fontSize: "var(--text-md)"
    }
  }, p.name), /*#__PURE__*/React.createElement("p", {
    style: {
      margin: 0,
      fontSize: "var(--text-sm)",
      color: "var(--color-text-muted)"
    }
  }, p.blurb)))));
}
Object.assign(window, {
  Work
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/Work.jsx", error: String((e && e.message) || e) }); }

// ui_kits/website/shared.jsx
try { (() => {
/* Studio9DN website — shared helpers, data, and image placeholders.
 * Exports to window for cross-file use in the Babel-transpiled kit.
 */

// Elegant duotone image placeholder (no generated imagery — forest/stone wash).
function Img({
  ratio = "4/3",
  label,
  tone = "forest",
  radius = "var(--radius-lg)",
  style = {}
}) {
  const tones = {
    forest: "linear-gradient(135deg, var(--forest-600), var(--forest-800))",
    stone: "linear-gradient(135deg, var(--stone-300), var(--stone-500))",
    light: "linear-gradient(135deg, var(--stone-100), var(--stone-300))",
    ochre: "linear-gradient(135deg, var(--ochre-500), var(--forest-700))"
  };
  return /*#__PURE__*/React.createElement("div", {
    style: {
      aspectRatio: ratio,
      background: tones[tone],
      borderRadius: radius,
      position: "relative",
      overflow: "hidden",
      ...style
    }
  }, /*#__PURE__*/React.createElement("div", {
    style: {
      position: "absolute",
      inset: 0,
      opacity: 0.16,
      backgroundImage: "repeating-linear-gradient(135deg, rgba(255,255,255,0.35) 0 1px, transparent 1px 22px)"
    }
  }), label && /*#__PURE__*/React.createElement("span", {
    style: {
      position: "absolute",
      left: 14,
      bottom: 12,
      fontFamily: "var(--font-display)",
      fontSize: "var(--text-2xs)",
      letterSpacing: "var(--tracking-wider)",
      textTransform: "uppercase",
      color: "rgba(255,255,255,0.78)"
    }
  }, label));
}
const PROJECTS = [{
  id: "idunnu",
  name: "Ìdúnnú Residence",
  type: "Residential",
  place: "Ikoyi, Lagos",
  year: "2024",
  tone: "forest",
  blurb: "A courtyard house organised around cross-ventilation and deep shaded verandas.",
  area: "640 m²",
  status: "Completed"
}, {
  id: "canopy",
  name: "Canopy Offices",
  type: "Commercial",
  place: "Victoria Island, Lagos",
  year: "2023",
  tone: "stone",
  blurb: "A perforated brise-soleil façade that cuts solar gain while framing the lagoon.",
  area: "3,200 m²",
  status: "Completed"
}, {
  id: "grove",
  name: "The Grove Pavilion",
  type: "Institutional",
  place: "Ibadan",
  year: "2023",
  tone: "ochre",
  blurb: "A timber-and-laterite teaching pavilion with a rain-harvesting butterfly roof.",
  area: "880 m²",
  status: "Completed"
}, {
  id: "tide",
  name: "Tideline Villas",
  type: "Residential",
  place: "Lekki, Lagos",
  year: "2025",
  tone: "light",
  blurb: "Six stepped villas tuned to the prevailing sea breeze and afternoon shade.",
  area: "2,100 m²",
  status: "In progress"
}, {
  id: "market",
  name: "Oja Market Hall",
  type: "Institutional",
  place: "Abeokuta",
  year: "2024",
  tone: "forest",
  blurb: "A naturally lit market under a lightweight vaulted canopy of local clay tile.",
  area: "4,500 m²",
  status: "In progress"
}, {
  id: "atrium",
  name: "Laterite Atrium",
  type: "Commercial",
  place: "Abuja",
  year: "2022",
  tone: "stone",
  blurb: "A workplace built around a shaded planted atrium that draws air upward.",
  area: "5,800 m²",
  status: "Completed"
}];
const NAV = [{
  id: "home",
  label: "Home"
}, {
  id: "work",
  label: "Work"
}, {
  id: "studio",
  label: "Studio"
}, {
  id: "contact",
  label: "Contact"
}];

// Brand wordmark image (forest / white)
function Wordmark({
  color = "forest",
  height = 26
}) {
  const src = color === "white" ? "../../assets/logos/Studio9DN-Wordmark-White.png" : "../../assets/logos/Studio9DN-Wordmark-Forest.png";
  return /*#__PURE__*/React.createElement("img", {
    src: src,
    alt: "Studio9DN",
    style: {
      height,
      width: "auto",
      display: "block"
    }
  });
}
Object.assign(window, {
  Img,
  PROJECTS,
  NAV,
  Wordmark
});
})(); } catch (e) { __ds_ns.__errors.push({ path: "ui_kits/website/shared.jsx", error: String((e && e.message) || e) }); }

__ds_ns.Avatar = __ds_scope.Avatar;

__ds_ns.Badge = __ds_scope.Badge;

__ds_ns.Card = __ds_scope.Card;

__ds_ns.Stat = __ds_scope.Stat;

__ds_ns.Tag = __ds_scope.Tag;

__ds_ns.Accordion = __ds_scope.Accordion;

__ds_ns.Dialog = __ds_scope.Dialog;

__ds_ns.Tooltip = __ds_scope.Tooltip;

__ds_ns.Button = __ds_scope.Button;

__ds_ns.Checkbox = __ds_scope.Checkbox;

__ds_ns.IconButton = __ds_scope.IconButton;

__ds_ns.Input = __ds_scope.Input;

__ds_ns.Radio = __ds_scope.Radio;

__ds_ns.Select = __ds_scope.Select;

__ds_ns.Switch = __ds_scope.Switch;

__ds_ns.Textarea = __ds_scope.Textarea;

__ds_ns.Breadcrumb = __ds_scope.Breadcrumb;

__ds_ns.Tabs = __ds_scope.Tabs;

})();
