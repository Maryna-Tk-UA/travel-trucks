"use client";

import { EQUIPMENT_OPTIONS, VEHICLE_TYPE_OPTIONS } from "@/constants/filter";
import Icon from "../Icon/Icon";
import css from "./FiltersPanel.module.css";
import { useCampersStore } from "@/lib/store/useCampersStore";

const FiltersPanel = () => {
  const location = useCampersStore((s) => s.filters.location);
  const equipment = useCampersStore((s) => s.filters.equipment);
  const vehicleType = useCampersStore((s) => s.filters.vehicleType);

  const setLocation = useCampersStore((s) => s.setLocation);
  const toggleEquipment = useCampersStore((s) => s.toggleEquipment);
  const setVehicleType = useCampersStore((s) => s.setVehicleType);

  const resetFilters = useCampersStore((s) => s.resetFilters);
  const searchCampers = useCampersStore((s) => s.searchCampers);
  return (
    <aside className={css.panel} aria-label="Filters">
      <div className={css.block}>
        <label className={css.label} htmlFor="location">
          Location
        </label>
        <div className={css.inputWrap}>
          <span className={css.inputIcon} aria-hidden="true">
            <Icon name="icon-Map" size={20} className={css.locationIcon} />
          </span>
          <input
            id="location"
            className={css.input}
            type="text"
            placeholder="Ukraine, Kyiv"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
          />
        </div>

        <p className={css.filtersTitle}>Filters</p>

        <fieldset className={css.fieldset}>
          <legend className={css.sectionTitle}>Vehicle equipment</legend>

          <div className={css.optionsGrid}>
            {EQUIPMENT_OPTIONS.map((o) => (
              <label key={o.key} className={css.card}>
                <input
                  className={css.visuallyHidden}
                  type="checkbox"
                  name="equipment"
                  value={o.key}
                  checked={equipment.includes(o.key)}
                  onChange={() => toggleEquipment(o.key)}
                />
                <span className={css.cardInner}>
                  <Icon
                    name={o.iconName}
                    size={32}
                    className={css.optionIcon}
                  />
                  <span className={css.optionLabel}>{o.label}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <fieldset className={css.fieldset}>
          <legend className={css.sectionTitle}>Vehicle type</legend>

          <div className={css.optionsGrid3}>
            {VEHICLE_TYPE_OPTIONS.map((o) => (
              <label key={o.key} className={css.card}>
                <input
                  className={css.visuallyHidden}
                  type="radio"
                  name="vehicleType"
                  value={o.key}
                  checked={vehicleType === o.key}
                  onChange={() => setVehicleType(o.key)}
                />
                <span className={css.cardInner}>
                  <Icon
                    name={o.iconName}
                    size={22}
                    className={css.optionIcon}
                  />
                  <span className={css.optionLabel}>{o.label}</span>
                </span>
              </label>
            ))}
          </div>
        </fieldset>

        <div className={css.btnGroup}>
          <button
            type="button"
            className={css.searchBtn}
            onClick={() => searchCampers()}
          >
            Search
          </button>
          <button
            type="button"
            className={css.resetBtn}
            onClick={() => {
              resetFilters();
              searchCampers();
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </aside>
  );
};

export default FiltersPanel;
