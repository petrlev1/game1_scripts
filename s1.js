#pragma strict


function Start () {

Debug.Log( 1 + 2 );

}


function Update () {

var pSpeed = GetComponent.<Transform>();
pSpeed.position.z = pSpeed.position.z + 0.5;



var MoveLR = GetComponent.<Transform>();

if ( Input.GetKey(KeyCode.D) ) {

MoveLR.position.x = MoveLR.position.x + 0.1;

}

if (Input.GetKey(KeyCode.A)) {

MoveLR.position.x = MoveLR.position.x - 0.1;

}

if (Input.GetKey(KeyCode.W)) {

pSpeed.position.z = pSpeed.position.z + 0.5;

}

if (Input.GetKey(KeyCode.S)) {

pSpeed.position.z = pSpeed.position.z - 0.2;

}




}