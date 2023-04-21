import { Equipment, EquipmentType, techRider } from "../components/utils/data";

const useEquipmentByType = () => {
  const equipmentsByType = new Map<EquipmentType, Equipment[]>();
  techRider.reduce((prev, equipment) => {
    const currentType = equipmentsByType.get(equipment.type);
    if (currentType) {
      currentType.push(equipment);
    } else prev.set(equipment.type, [equipment]);

    return equipmentsByType;
  }, equipmentsByType);

  return {
    equipmentsByType: Array.from(equipmentsByType.entries()).map(
      ([type, equipments]) => ({ type, equipments })
    ),
  };
};

export { useEquipmentByType };
