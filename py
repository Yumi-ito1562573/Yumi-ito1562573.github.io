# PYTHON script
import os
import ansa
from ansa import base
from ansa import constants

def main():
	partlist=list()
	
	parts = base.CollectEntities(constants.NASTRAN, None, "ANSAPART", recursive=True)
#	print("parts=",parts)
	for part in parts:
#		print(part)
		vals = ('Name',)
		ret = base.GetEntityCardValues(constants.NASTRAN, part, vals)
		partname = ret['Name']
		
		partfrom = base.GetPartFromName(partname)
		partlist.append(partfrom)
#	print("partlist=",partlist)
	
	new_group = base.NewGroup(name="WB")
	base.SetEntityPart(parts, new_group)
	
	part = base.NewPart('11111')
	base.SetEntityPart(part, new_group)
	
	frompart = base.GetPartFromName('11111')
	print(frompart)
	
	vals = ('Hierarchy',)
	ret = base.GetEntityCardValues(constants.NASTRAN, frompart, vals)
#	print(ret['Hierarchy'])
	split_hie = ret['Hierarchy'].split("/")
	print(split_hie[0])


if __name__ == '__main__':
	main()


CollectEntities, (function)    BETA PYTHON development Manual
NAME:
CollectEntities - Collects massively the entities of a particular type.

SYNOPSIS:
ansa.base.CollectEntities(deck, containers, search_types, recursive, filter_visible, prop_from_entities, mat_from_entities, model_browser_filter, no_expand_types, hidden_entities) Named Arguments

DESCRIPTION:
Creates a list with the entities of specific types, contained in the containers.

SEE ALSO:
base.CollectEntitiesI

ARGUMENTS:
    [required]     deck                     integer   The deck for which the collection will take place.
    [required]     containers               object    A reference to a container  entity or list with references to  containers.
Some of the containers can be of type ANSAGROUP, ANSAPART, SET, 
property, material, face,  volume, elements, task manager items etc
If the container is None, CollectEntities will search the entire 
ANSA database.
    [required]     search_types             object    A string or list of strings with "ansa keywords" of the types to be 
collected. Such types can be SHELL, SOLID, GRID etc.
Additionally, the following keywords can be used:
"__PROPERTIES__": returns all properties in the "containers".
"__MATERIALS__": returns all materials in the "containers".
"__ELEMENTS__": returns all standard elements in the "containers".
"__ALL_ENTITIES__": returns all entities in the "containers".
"__CONNECTIONS__": returns all connections in the "containers".
"__MBCONTAINERS__": returns the model browser containers of the model if 
used with containers=None or the model browser containers of the containers.
"__COORD_SYSTEMS__": returns all the coordinate systems in the "containers".
"__CONNECTION_TEMPLATES__": returns all the connection templates in the "containers".
"__OUT_OF_MBCONTAINERS__": returns the entities of the OutOfMBContainer. Can be used along with argument model_browser_filter.
"BATCH_MESH_SESSION_GROUP": returns the meshing scenarios of Batch Mesh
"BATCH_MESH_VOLUME_SCENARIO": returns the volume scenarios of Batch Mesh 
"BATCH_MESH_WRAP_SCENARIO": returns the wrap scenarios of Batch Mesh
"BATCH_MESH_LAYERS_SCENARIO": returns the layer scenarios of Batch Mesh
    [optional]     recursive                boolean   Recursively search any containers contained in a higher level container 
for any of the search_types. (Default: False).
    [optional]     filter_visible           boolean   Return only the entities that satisfy all the collection criteria, 
have visibility status, and the status is active.
In all other cases the parameter is ignored.
(Default: False).
    [optional]     prop_from_entities       boolean   In case search_type is a property, this argument controls if the property 
must be acquired from the entities referenced by the entities in the 
container or not. For example, if search_type is "PSHELL", container is 
"PART", and prop_from_entities is True, if the part contains shells, the 
corresponding PSHELL will be returned. 
Otherwise, if prop_from_entities is False, None will be returned.
(Default: False).
    [optional]     mat_from_entities        boolean   In case search_type is a material, this argument controls if the material 
must be acquired from the entities referenced by the entities in the 
container or not. For example, if search_type is "MAT1", container is 
"PART", and mat_from_entities is "yes", if the part  contains elements 
with MAT1 material, the corresponding material will be returned.
Otherwise, if mat_from_entities is False, None will be returned.
(Default: False).
    [optional]     model_browser_filter     object    In case search_types is None, this argument controls which entities to 
collect from a Part, a Group, a Subsystem, a Simulation Model or a 
Simulation Run. 'model_browser_filter' is a dictionary with three keys: 
'container', 'collect_mode' and 'collect_depth'.Acceptable values for these keys 
vary according to the entity they are applied on.

-When collecting entities from a Part or a Group:
{ 'container' : 'all', 'collect_mode' : 'contents' | 'part_contents_and_references' | 'part_contents_and_related'} ,  'collect_depth' key is not applicable here.

'container' values:
-'all' returns entities of any type

'collect_mode' values:
-'contents' returns entities that strictly belong to the Part or the Group.
-'part_contents_and_references' returns the 'contents' plus their properties and 
materials. 
-'part_contents_and_related'  returns the 'contents_related' plus all entities that 
are geometrically related to it (use same nodes or are otherwise connected). 
-'contents_related' .This value is deprecated, replaced by 'part_contents_and_references'.
-'contents_affected'. This value is deprecated, replaced by 'part_contents_and_related'.

-When collecting entities from a Subsystem, a Simulation Model or a 
Simulation Run:
{ 'container': 'all' | 'geometry' | 'connections' | 'model_setup_entities' | 'interfaces', 
'collect_mode': 'contents' | 'missing' | 'misplaced', 
'collect_depth': 'own_level' | 'all_levels' }

'container' values:
-'all' returns entities of any type.
-'geometry' returns geometry entities.
-'connections' returns Connections & Connectors.
-'model_setup_entities' returns Model Setup Entities 
(like RBE3s directly connected to geometry)
-'interfaces' returns Interfaces (like A_POINTs).

'collect_mode' values:
-'contents' returns entities that directly belong to the 'container'.
-'missing' returns entities that don't belong to the 'container' but should do.
-'misplaced' returns entities that belong to the 'container' but shouldn't do.

'collect_depth' values:
-'own_level' returns entities that are directly under the 'container', not under its inner containers. 
-'all_levels' returns entities found at any inner level under 'container'.
Example:
In case we want to collect the Connections of a SimModel, only the ones that are directly under it, we use 'own_level'.On the contrary, in case we wish to collect all connections, both from the SimModel as well as the connections under its subsystems/rlis, we use 'all_levels'.

Note that use of model_browser_filter argument demands setting 'containers' argument with a value other than 'None'.
Note that 'missing' and 'misplaced' are not defined for the 
GEOMETRY_OUT_OF_SUBSYSTEMS Subsystem(obsolete since 22.0.0).
    [optional]     no_expand_types          object    A list with ANSA types which won't be expanded while collecting their 
entities. Currently it works only for SETs with recursive = False, 
no_expand_types = ('SET',) in order to get the first level SET contents.
    [optional]     hidden_entities          boolean   If hidden_entities = False the hidden (inactive) entities will not be collected. These are the entities that are listed in the "Inactive" category of the Database Browser (e.g entities of parts with representation="Don't Use"). Default is True.

RETURN TYPE:
object

RETURN VALUE:
Returns a list with all the collected entities.

EXAMPLE:
import ansa
from ansa import base
from ansa import constants

def main():
	set1 = base.CreateEntity(constants.NASTRAN, 'SET', {'Name': 'new set 1'})

	m = []
	containers = []

	for i in range(1,100):
		m.append(base.GetEntity(constants.NASTRAN, "GRID", i))

	base.AddToSet(set1, m)
	
	prop = base.GetEntity(constants.NASTRAN, 'PSHELL', 1)
	
	containers.append(set1)
	containers.append(prop)

	ents = base.CollectEntities(constants.NASTRAN, containers, "GRID", recursive=True)
	for ent in ents:
		base.SetEntityCardValues(constants.NASTRAN, ent, {'Name': 'node of set 1 or prop 1'})
	
def main():
	part = base.GetPartFromModuleId("10")

	pshells = base.CollectEntities(constants.NASTRAN, part, "PSHELL", prop_from_entities=True)
	for pshell in pshells:
		print("PID: ", pshell._id)

	materials = base.CollectEntities(constants.NASTRAN, part, "__MATERIALS__", mat_from_entities=True)
	for material in materials:
		print("MID:", material._id)
	
def main():
	subsystem = base.Entity(constants.ABAQUS, 1, 'ANSA_SUBSYSTEM')

	mbf = {'container': 'interfaces', 'collect_mode': 'contents'}
	interfaces = base.CollectEntities(constants.ABAQUS, subsystem, None, model_browser_filter=mbf)

	mbf = {'container': 'connections', 'collect_mode': 'contents'}
	connections = base.CollectEntities(constants.ABAQUS, subsystem, None, model_browser_filter=mbf)
	
	mbf = { 'container':'all', 'collect_mode':'contents'}
    	entities = base.CollectEntities(deck=0, containers=None, search_types="__OUT_OF_MBCONTAINERS__", model_browser_filter=mbf)
-----------------------------------------------------------------




GetEntityCardValues, (function)    BETA PYTHON development Manual
NAME:
GetEntityCardValues - Gets values from an edit card of an entity.

SYNOPSIS:
ansa.base.GetEntityCardValues(deck, entity, fields)  Named Arguments

DESCRIPTION:
Gets values from an entity using its Edit Card. The labels are taken from the fields in the edit card.
The respective values of these fields are then assigned the entity's parameters.

In addition to the Edit Card labels, this function also recognizes the following strings as labels and returns their values:
-"__id__" for entity's ID.
-"__type__" for entity's ANSA type.
-"__prop__" for entity's property. "__prop__" has no meaning for entities that don't take a property.
-"MBContainer" for entity's Model Browser Container. "MBContainer" has no meaning for entities that can't be in a Model Browser Container.
-"__part__" for entity's PART. If an entity takes a PART but doesn't have one, None will be returned.

REMARKS:
This function incorrectly returns "SOLID" as the __type__ atrribute of a "SOLIDFACET" entity.
The labels for the Renumber rules without edit card are taken from the Renumber Tool window.
The "childen" rules' labels are extented with _ID, e.g. Name_1, Apply_1.  

SEE ALSO:
SetEntityCardValues, GetEntity, GetEntityType

ARGUMENTS:
    [required]     deck                     integer   The selected deck.
    [required]     entity                   object    The ANSA entity where the values will be extracted from.
    [required]     fields                   object    A list of card field labels to extract the values from.

RETURN TYPE:
object

RETURN VALUE:
Returns a Dictionary with the requested labels as keys and the retrieved values as the dictionary's values. 
If the function fails to find the requested fields, the dictionary's value will be empty.

EXAMPLE:
import ansa
from ansa import base
from ansa import constants

# Using positional arguments
def main():
	prop = base.GetEntity(constants.NASTRAN, "PSHELL", 1)
	vals = ('T', 'MID1')
	ret = base.GetEntityCardValues(constants.NASTRAN, prop, vals) 
	if ret['MID1']:
		print(ret['MID1'])
	print(ret['T'])
	print(prop._name)

#...or...

# Using named arguments
def main():
	prop = base.GetEntity(constants.NASTRAN, "PSHELL", 1)
	vals = ('T', 'MID1')
	ret = base.GetEntityCardValues(entity=prop, fields=vals, deck=constants.NASTRAN) 
	if ret['MID1']:
		print(ret['MID1'])
	print(ret['T'])
	
	print(prop._name)

#...or...

# Using the object's method 'get_entity_values' (more info on the 'base.Entity' class)
def main():
	rbe_id = 100
	rbe = base.GetEntity(constants.NASTRAN, 'RBE2', rbe_id)
	mb_ent = rbe.get_entity_values(constants.NASTRAN, ['MBContainer'])
-----------------------------------------------------------------



GetPartFromName, (function)    BETA PYTHON development Manual
NAME:
GetPartFromName - Returns a part (or a part-like entity) with the given name.

SYNOPSIS:
ansa.base.GetPartFromName(name, type) Named Arguments

DESCRIPTION:
This function returns an "ANSAPART" or "ANSAGROUP",
according to the "name" given as argument.

This function can also return an "ANSA_CONFIGURATION" or "ANSA_SUBSYSTEM",
if the second optional argument "type" is used.

ARGUMENTS:
    [required]     name                     string    The name.
    [optional]     type                     string    The type of the entity.
For Configurations use type: "ANSA_CONFIGURATION".
For Subsystems use type: "ANSA_SUBSYSTEM".
For Simulation Models use type: "ANSA_SIMULATION_MODEL"
For Simulation Runs use type: "ANSA_SIMULATION_RUN"

RETURN TYPE:
object

RETURN VALUE:
Returns a reference to the "ANSAPART" or "ANSAGROUP" with the specified Name.
If such part does not exist None is returned.

If the additional argument "type" has been used, this function returns
an "ANSA_CONFIGURATION" or an "ANSA_SUBSYSTEM".

EXAMPLE:
import ansa
from ansa import base

def main():
	part = base.GetPartFromName("100")
	subsystem = base.GetPartFromName("100", type="ANSA_SUBSYSTEM")
-----------------------------------------------------------------



NewGroup, (function)    BETA PYTHON development Manual
NAME:
NewGroup - Creates a new group.

SYNOPSIS:
ansa.base.NewGroup(name, module_id)   Named Arguments

DESCRIPTION:
This function instructs the program to create a new group named 'name' with module id 'module_id'.
Please refer to the appropriate ANSA documentation for a detailed documentation on groups and their management.

ARGUMENTS:
    [required]     name                     string    The name of the new part.
    [optional]     module_id                string    The module id of the new part.

RETURN TYPE:
object

RETURN VALUE:
Returns a reference to the new group, if it is created successfully, and None otherwise.

EXAMPLE:
import ansa
from ansa import base

def main():
	new_group = base.NewGroup(name="SOME_GROUP", module_id="GROUP58")
-----------------------------------------------------------------




SetEntityPart, (function)    BETA PYTHON development Manual
NAME:
SetEntityPart - Assigns one or more entities to a specific part.

SYNOPSIS:
ansa.base.SetEntityPart(ent, part)

DESCRIPTION:
This function assigns one or more entities to a specific part. It can also be used to assign a part to a group. Moreover, it can be used to move a part to the top level of the hierarchy (by using None as the argument for the entity to tranfer to)

ARGUMENTS:
    [required]     ent                      object    An entity or a list of entities to be assigned. 
    [required]     part                     object    The part entity to transfer ent into.
None argument is also accepted for the following kinds of entities: 
GEBs, RESULTs_MAPPERs, INVERSE FORMINGs, SPCs, AIRBAGs, MOTIONs,
DEFINE_HEX_SPOTWELD_ASSEMBLY, DISPLAY MODELs, Nastran PEM entities
(TRMCPLs, ACPEMCPLs), Nastran Thermal BCs (QVECT etc), CONNECTIONs.

RETURN TYPE:
integer

RETURN VALUE:
Returns 1 on success, or 0 on failure.

EXAMPLE:
import ansa
from ansa import base
from ansa import constants

def main():
	ent = base.GetEntity(constants.NASTRAN, "SHELL", 10000)			#Get entity with specific id
	part =  base.GetPartFromModuleId("300")					#Get parent part
	base.SetEntityPart(ent, part)						#Assign entity to parent part
	
	ents = []
	ents.append(base.GetPartFromModuleId("100"))				#Add a part reference in matrix
	for i in range(1,100):
		ents.append(base.GetEntity(constants.NASTRAN, "SHELL", i))	#Add entities of type GRID in matrix
	
	part =  base.GetPartFromModuleId("200")					#Get parent part
	base.SetEntityPart(ents, part)						#Set all matrix entities in part
-----------------------------------------------------------------



###	MIDを新規で作成　PIDに設定	####################


# PYTHON script
import os
import ansa
from ansa import base
from ansa import constants


def main():
	
###	MIDを新規で作成　PIDに設定	####################
###	まずMIDを新規で作成	###########################
	pshells = base.CollectEntities(constants.NASTRAN, None, "PSHELL", recursive=True)
#	print(pshells)
	for pshell in pshells:
#		print(pshell._id)
		vals = {'MID' : pshell._id}
		mat = base.CreateEntity(constants.NASTRAN, "MAT1", vals)

###	新規作成したMIDをPIDに設定	####################	
		vals = {'MID1' : mat._id}
		base.SetEntityCardValues(constants.NASTRAN, pshell, vals)
#		print(mat)

if __name__ == '__main__':
	main()

