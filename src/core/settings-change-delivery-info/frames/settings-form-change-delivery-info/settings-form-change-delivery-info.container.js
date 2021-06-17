import { SettingsFormChangeDeliveryInfoComponent } from './settings-form-change-delivery-info.component';

export function SettingsFormChangeDeliveryInfoContainer(props) {
  const { deliveryTypeOptions } = props;

  return (
    <SettingsFormChangeDeliveryInfoComponent
      deliveryTypeOptions={deliveryTypeOptions}
    />
  );
}
