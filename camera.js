#pragma strict

public var target: Transform;

function Start () {

}

function Update () {

    transform.LookAt(target);

    transform.position = target.position;

    var pCam = GetComponent.<Transform>();
pCam.position.z = pCam.position.z - 20;
pCam.position.y = pCam.position.y + 5;


}