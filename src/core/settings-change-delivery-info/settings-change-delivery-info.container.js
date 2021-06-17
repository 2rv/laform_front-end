import { SettingsFormChangeDeliveryInfoContainer } from './frames/settings-form-change-delivery-info';
import { SETTINGS_CHANGE_DELIVERY_INFO_DELIVERY_TYPE_OPTIONS } from './settings-change-delivery-info.constant';

export function SettingsChangeDeliveryInfoContainer() {
  return (
    <SettingsFormChangeDeliveryInfoContainer
      deliveryTypeOptions={SETTINGS_CHANGE_DELIVERY_INFO_DELIVERY_TYPE_OPTIONS}
    />
  );
}
