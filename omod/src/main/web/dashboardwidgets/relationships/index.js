import angular from 'angular';
import openmrsApi from '@openmrs/angularjs-openmrs-api';
import typeahead from 'angular-ui-bootstrap/src/typeahead';

import { RelationshipsComponent } from './relationships.component';

export default angular.module("openmrs-contrib-dashboardwidgets.relationships", [ openmrsApi, typeahead ])
	.component(RelationshipsComponent.selector, RelationshipsComponent).name;