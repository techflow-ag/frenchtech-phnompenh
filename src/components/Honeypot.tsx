// Anti-spam honeypot: an off-screen field humans never fill but bots do.
// If it's submitted with a value, the API routes silently drop the request.
export function Honeypot() {
  return (
    <div
      aria-hidden="true"
      style={{ position: "absolute", left: "-9999px", top: "-9999px" }}
    >
      <label>
        Do not fill this field
        <input
          type="text"
          name="hp_field"
          tabIndex={-1}
          autoComplete="off"
          defaultValue=""
        />
      </label>
    </div>
  );
}
